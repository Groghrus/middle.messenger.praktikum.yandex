import BaseAPI from './base-api.ts';
import {
  IUser,
} from './auth-api.ts';

export interface IChat {
    id: number;
    avatar: string;
    created_by: number;
    last_message: {
        user: IUser,
        time: string;
        content: string;
    };
    title: string;
    unread_count: number;
}

export class ChatApi extends BaseAPI {
  constructor() {
    super('/chats');
  }

  getChats(data: Record<string, any>):Promise<unknown> {
    return this.http.get('/', { data });
  }
  createChat(title: string):Promise<unknown> {
    return this.http.post('/', { data: { title } });
  }
  deleteChat(chatId: number) {
    return this.http.delete('/', {
      data: {
        chatId,
      },
    });
  }
  addUser(users: number[], chatId: number):Promise<unknown> {
    return this.http.put('/users', {
      data: {
        users,
        chatId,
      },
    });
  }
  deleteUser(users: number[], chatId: number):Promise<unknown> {
    return this.http.delete('/users', {
      data: {
        users,
        chatId,
      },
    });
  }
  getChatUser(chatId: number):Promise<unknown> {
    return this.http.get(`/${chatId}/users`);
  }
  uploadChatAvatar(data: FormData):Promise<unknown> {
    return this.http.put('/avatar', { data });
  }
  getToken(chatId: number) {
    return this.http.post(`/token/${chatId}`);
  }
}
