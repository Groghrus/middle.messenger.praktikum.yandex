import {
  AuthApi, ISignIn, ISignUp,
} from '../api/auth-api.ts';
import store from '../lib/Store.ts';
import router from '../lib/Router.ts';

class AuthController {
  private api = new AuthApi();
  async fetchUser() {
    try {
      const user = await this.api.getUser();
      store.set('user', user);
    } catch (e) {
      console.log(e);
    }
  }
  async signIn(data: ISignIn) {
    try {
      await this.api.signIn(data);
      await this.fetchUser();
      router.go('/messenger');
    } catch (e) {
      console.log(e);
    }
  }
  // create user
  async signUp(data: ISignUp) {
    try {
      await this.api.signUp(data);
      router.go('/messenger');
    } catch (e) {
      console.log(e);
    }
  }
  async logout() {
    try {
      router.go('/');
      await this.api.logout();
      store.set('user', undefined);
    } catch (e) {
      console.log(e);
    }
  }
}
export default new AuthController();
