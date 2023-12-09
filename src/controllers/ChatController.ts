import {
  ChatApi, IChat,
} from '../api/chat-api.ts';
import store from '../lib/Store.ts';
import {
  MessagesController,
} from './MessagesController.ts';
import {
  IUser,
} from '../api/auth-api.ts';
export interface IChatMember extends Omit<IUser, 'phone' | 'email'> {
    role?: string;
}
class ChatController {
  private api = new ChatApi();
  async getChatList() {
    try {
      const chats: any = await this.api.getChats({ limit: 25 });

      chats.map(async (chat: IChat) => {
        // @ts-ignore
        const { token } = await this.api.getToken(chat.id);
        await MessagesController.connect(chat.id, token);
      });
      store.set('chats', chats);
    } catch (e) {
      console.log(e);
    }
  }
  async create(title: string) {
    try {
      await this.api.createChat(title);
      await this.getChatList();
    } catch (e) {
      console.log(e);
    }
  }
  async addUserToChat(chatId: number, userId: number[]) {
    try {
      await this.api.addUser(userId, chatId);
      await this.getChatList();
    } catch (e) {
      console.log(e);
    }
  }
  async deleteUserFromChat(chatId: number, userId: number[]) {
    try {
      await this.api.deleteUser(userId, chatId);
      await this.getChatList();
    } catch (e) {
      console.log(e);
    }
  }
  get currentChat() {
    // @ts-ignore
    return store.getState()?.selectChat.reduce((obj: IChat) => ({ ...obj }));
  }
  selectChat(chatId: number) {
    const target = store.getState().chats?.find((chat: any) => chat.id === chatId);
    console.log('selectChat', target);
    store.set('selectChat', [target]);
    store.set('currentChatID', chatId);
    this.fetchChatUsers(chatId);
  }
  async fetchChatUsers(chatId: number) {
    try {
      const chatMembers: any = await this.api.getChatUser(chatId);
      const nonAdminMembers = chatMembers.filter((user: any) => user.role !== 'admin');
      store.set('selectChat', [
        {
          ...store.getState().selectChat?.[0],
          members: nonAdminMembers,
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  }
  async deleteChat(chatId: number) {
    try {
      await this.api.deleteChat(chatId);
      store.set('selectChat', undefined);
      await this.getChatList();
    } catch (e) {
      console.log(e);
    }
  }
  async editChatAvatar(data: FormData) {
    try {
      const response = await this.api.uploadChatAvatar(data);
      // @ts-ignore
      const { avatar, id } = response;

      const { chats, selectChat } = store.getState();
      const updatedChats = chats?.map((chat: any) => (chat.id !== id
        ? chat
        : {
          ...chat,
          avatar,
        }));

      if (updatedChats) {
        store.set('chats', updatedChats);
      }
      store.set('selectChat', [
        {
          ...selectChat?.[0],
          avatar,
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  }
  async getToken(chatId: number) {
    return this.api.getToken(chatId);
  }
}

export default new ChatController();