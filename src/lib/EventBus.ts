type event = string
type callback = (...args: unknown[]) => void
type listeners = { [key: string]: callback[] };
/*
type eventList = Record<string | number | symbol, unknown[]>;

export default class EventBus<E extends eventList = eventList> {
  private readonly listeners = {} as {[K in keyof E]?: Array<(...args: E[K]) => void>};
  public on<K extends keyof E>(event: K, callback: (...args: E[K]) => void): void {
      const events = this.listeners[event] ?? [];

      events.push(callback);
      this.listeners[event] = events;
  }

  public off<K extends keyof E>(event: K, callback: (...args: E[K]) => void): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${String(event)}`);
    }
    this.listeners[event] = this.listeners[event]?.filter(
      (listener: () => void) => listener !== callback,
    );
  }

  public emit<K extends keyof E>(event: K, ...args: E[K]): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${String(event)}`);
    }
    this.listeners[event]?.forEach((listener) => {
      listener(...args);
    });
  }
}
*/


export default class EventBus {
  private readonly listeners: listeners = {};

  constructor() {
    this.listeners = {};
  }

  public on(event: event, callback: callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  public off(event: event, callback: callback) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener: () => void) => listener !== callback,
    );
  }

  public emit(event: event, ...args: unknown[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}

