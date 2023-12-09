import BaseApi from './base-api.ts';

export interface ISignUp {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}
export interface ISignIn {
  login: string;
  password: string;
}
export interface IUser {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export class AuthApi extends BaseApi {
  constructor() {
    super('/auth');
  }
  signIn(data: ISignIn): Promise<unknown> {
    return this.http.post('/signin', { data });
  }
  signUp(data: ISignUp): Promise<unknown> {
    return this.http.post('/signup', { data });
  }
  logout(): Promise<unknown> {
    return this.http.post('/logout');
  }
  getUser(): Promise<unknown> {
    return this.http.get('/user');
  }
}
