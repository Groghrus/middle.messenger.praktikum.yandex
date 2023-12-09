import BaseAPI from './base-api.ts';

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
  changeUserProfile(data: IChangeUserProfile):Promise<unknown> {
    return this.http.put('/profile', { data });
  }
  changeUserAvatar(data: FormData):Promise<unknown> {
    return this.http.put('/profile/avatar', { data });
  }
  changeUserPassword(data: IchangeUserPassword):Promise<unknown> {
    return this.http.put('/password', { data });
  }
  getUserById(id: number):Promise<unknown> {
    return this.http.get(`/${id}`);
  }
  searchUserByLogin(data: ISearchUser):Promise<unknown> {
    return this.http.post('/search', { data });
  }
}
