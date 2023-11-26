import BaseAPI from "./base-api.ts";
import {IUser} from "./auth-api.ts";

export interface IChangeUserProfile {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}
export interface IchangeUserPassword {
  oldPassword: string;
  newPassword: string;
}
export interface ISearchUser {
  login: string;
}
export class ProfileApi extends BaseAPI {
  constructor() {
    super('/user');
  }
  changeUserProfile(data: IChangeUserProfile) {
    // @ts-ignore
    return this.http.put('/profile', { data: data });
  }
  changeUserAvatar(data: FormData) {
    // @ts-ignore
    return this.http.put('/profile/avatar', { data: data });
  }
  changeUserPassword(data: IchangeUserPassword) {
    // @ts-ignore
    return this.http.put('/password', { data: data });
  }
  getUserById(id: number): Promise<IUser> {
    // @ts-ignore
    return this.http.get(`/${id}`);
  }
  searchUserByLogin(data: ISearchUser): Promise<IUser> {
    // @ts-ignore
    return this.http.post('/search', { data: data })
  }
}
