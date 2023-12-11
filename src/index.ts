import './assets/main.scss';
import router, { Routes } from './lib/Router.ts';
import {authPage, signInPage, chatPage, profilePage, profileEdit, profilePwdEdit, error404, error500} from './pages';
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
        router.use(Routes.Err404, error404)
        router.use(Routes.Err500, error500)
    }

    let isProtectedRoute = true;
    switch (window.location.pathname) {
        case Routes.Auth:
        case Routes.Register:
            isProtectedRoute = false;
            break;
    }
    try {
        await AuthController.fetchUser()
        router.start();
        if (isProtectedRoute) {
            router.go(Routes.Chat);
        }
    } catch (e) {
        console.error(e);
        router.start();

        if (!isProtectedRoute) {
            router.go(Routes.Auth);
        }
    }
})
