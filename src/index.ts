import './assets/main.scss';
import router, { Routes } from './lib/Router.ts';
import { authPage, signInPage, chatPage, profilePage, profileEdit, profilePwdEdit} from './pages';
import AuthController from './controllers/AuthController.ts';

window.addEventListener('DOMContentLoaded',  async () => {
    const root = document.getElementById('app');
    if (root) {
        router.use(Routes.Auth, authPage);
        router.use(Routes.Register, signInPage);
        router.use(Routes.Chat, chatPage);
        router.use(Routes.Profile, profilePage);
        router.use(Routes.ProfileEdit, profileEdit)
        router.use(Routes.ProfilePwdEdit, profilePwdEdit)
    }

    let isProtectedRoute = true;
    switch (window.location.pathname) {
        case Routes.Auth:
        case Routes.Register:
            isProtectedRoute = false;
            break;
    }
    try {
        console.log('index ')
        await AuthController.fetchUser()
        router.start();
        if (!isProtectedRoute) {
            router.go(Routes.Chat);
        }
    } catch (e) {
        console.error(e);
        router.start();

        if (isProtectedRoute) {
            router.go(Routes.Auth);
        }
    }
})
