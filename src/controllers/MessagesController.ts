import {
  WebSocketEvents, WebSocketTransporter,
} from '../utils/WebSocketTransporter.ts';
import store from '../lib/Store.ts';
import ChatController from './ChatController.ts';

export interface ILastMsg {
    content: string;
    time: string;
    user: {
        avatar: string;
        email: string;
        first_name: string;
        login: string;
        phone: string;
        second_name: string;
    };
}
export interface IMsgData {
    chat_id: number;
    content: string;
    file?: {
        content_size: number;
        content_type: string;
        filename: string;
        id: number;
        path: string;
        upload_date: string;
        user_id: number;
    };
    time: string;
    type: string;
    user_id: string;
}
export class MessagesController {
  private static transports: Map<number, WebSocketTransporter> = new Map();

  static async connect(chatId: number, token: string) {
    if (this.transports.has(chatId)) {
      return;
    }
    const userId = store.getState().user?.id;

    const transport = new WebSocketTransporter(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);
    this.transports.set(chatId, transport);
    console.log('Connect chatId:', chatId);
    await transport.connect();
    this.subscribe(transport, chatId);
    this.fetchOldMessages(chatId);
  }
  static async sendMessage(chatId: number, message: string) {
    const transport = this.transports.get(chatId);
    if (!transport) {
      throw new Error(`Чат ${chatId} не подключён`);
    }

    if (message) {
      transport.send({
        type: 'message',
        content: message,
      });
    }
  }
  static fetchOldMessages(chatId: number) {
    const transport = this.transports.get(chatId);
    if (!transport) {
      throw new Error(`Чат ${chatId} не подключён`);
    }
    transport.send({
      type: 'get old',
      content: '0',
    });
  }
  static handleMessages(messages: IMsgData[] | IMsgData, chatId: number) {
    const incomingMessages = Array.isArray(messages) ? messages.reverse() : [messages];
    const currentMessages = store.getState().messages?.[chatId] ?? [];
    const allMessages = [...currentMessages, ...incomingMessages].filter((message) => message.type === 'message');
    store.set(`messages.${chatId}`, allMessages);
    if (!Array.isArray(messages)) {
      this.findMessages(chatId);
    }
    ChatController.getChatList();
  }
  static findMessages(chatId: number) {
    const messages = store.getState().messages?.[chatId];
    store.set('currentMessages', messages);
  }
  static subscribe(transport: WebSocketTransporter, chatId: number) {
    transport.on(WebSocketEvents.Message, (data: any) => {
      this.handleMessages(data, chatId);
    });
  }
}
