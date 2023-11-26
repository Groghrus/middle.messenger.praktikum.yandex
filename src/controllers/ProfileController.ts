import {IchangeUserPassword, IChangeUserProfile, ProfileApi} from "../api/profile-api.ts";
import store from "../lib/Store.ts";

class ProfileController {
    private api = new ProfileApi();

    async changeProfile(data: IChangeUserProfile) {
        try {
            const user = await this.api.changeUserProfile(data)
            store.set('user', user)
        } catch (e) {
            console.log(e);
        }
    }
    async changePassword(data: IchangeUserPassword) {
        try {
            return await this.api.changeUserPassword(data)
        } catch (e) {
            console.log(e);
        }
    }
    async changeAvatar(data: FormData) {
        try {
            const user = await this.api.changeUserAvatar(data);
            store.set('user', user);
        } catch (e) {
            console.log(e);
        }
    }
    async getUserByLogin(data: { login: string }) {
        try {
            return await this.api.searchUserByLogin(data);
        } catch (e) {
            console.log(e);
            return [];
        }
    }

}

export default new ProfileController();
