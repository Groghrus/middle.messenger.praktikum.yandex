import EventBus from '../lib/EventBus.ts';

// eslint-disable-next-line no-shadow
export enum WebSocketEvents {
    Connect = 'connected',
    Open = 'open',
    Close = 'close',
    Error = 'error',
    Message = 'message'
}

export class WebSocketTransporter extends EventBus {
  private socket: WebSocket | null = null;

  private interval: number = 0;

  private readonly url: string;

  constructor(url: string) {
    super();
    this.url = url;
  }
  public connect() {
    this.socket = new WebSocket(this.url);
    this.addEventListeners(this.socket);
    this.setPing();
    return new Promise<void>((resolve) => {
      this.on(WebSocketEvents.Connect, () => resolve());
    });
  }
  private setPing() {
    // @ts-ignore
    this.interval = setInterval(() => {
      this.send({ type: 'ping' });
    }, 5000);

    this.on(WebSocketEvents.Close, () => {
      clearInterval(this.interval);

      this.interval = 0;
    });
  }
  public send(data: unknown) {
    if (!this.socket) {
      throw new Error('Соединение не установлено');
    }
    this.socket.send(JSON.stringify(data));
  }
  private addEventListeners(socket: WebSocket) {
    socket.addEventListener(WebSocketEvents.Open, () => {
      this.emit(WebSocketEvents.Connect);
    });

    socket.addEventListener(WebSocketEvents.Close, (event: CloseEvent) => {
      if (event.wasClean) {
        console.log('Соединение закрыто', event.reason);
      } else {
        console.log('Соединение прервано');
      }
      this.emit(WebSocketEvents.Close);
    });

    socket.addEventListener(WebSocketEvents.Message, (message: MessageEvent) => {
      try {
        const data = JSON.parse(message.data);
        if (data.type === 'pong') {
          return;
        }
        this.emit(WebSocketEvents.Message, data);
      } catch (error) {
        console.log(error);
      }
    });

    socket.addEventListener(WebSocketEvents.Error, (event: Event) => {
      console.log('Error', event);
      this.emit(WebSocketEvents.Error, event);
    });
  }
}
