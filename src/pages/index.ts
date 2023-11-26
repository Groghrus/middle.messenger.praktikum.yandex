import MainLayout from '../layout/main';
import AuthPage from './auth';
import SigninPage from './signin';
import ButtonBack from '../components/buttonBack';
import ProfileLayout from '../layout/profile';
import ProfilePage from './profile';
import ProfileEdit from './profile-edit';
import ProfilePwdEdit from './password-edit';
import ChatPage from './chat';
import ErrorPage from './error';
import ModalsPage from './modals';
import router from "../lib/Router.ts";

export const authPage = new MainLayout(
    'main',
    {
        content: new AuthPage(),
        attr: {
            class: 'layout',
        },
    },
);
export const chatPage = new ChatPage();
export const signInPage = new MainLayout(
    'main',
    {
        content: new SigninPage(),
        attr: {
            class: 'layout',
        },
    },
);

export const profilePage = new ProfileLayout('main', {
    buttonBack: new ButtonBack('div', {
        events: {
           click: () => {
             router.back()
           }
        },
        attr: {
           class: 'profile-page__back',
        },
      }
    ),
    content: new ProfilePage(),
});



export const profileEdit = new ProfileLayout('main', {
    buttonBack: new ButtonBack('div', {
            events: {
                click: () => {
                    router.back()
                }
            },
            attr: {
                class: 'profile-page__back',
            },
        }
    ),
    content: new ProfileEdit(),
});
export const profilePwdEdit = new ProfileLayout('main', {
    buttonBack: new ButtonBack('div', {
            events: {
                click: () => {
                    router.back()
                }
            },
            attr: {
                class: 'profile-page__back',
            },
        }
    ),
    content: new ProfilePwdEdit(),
});

export const error404 = new ErrorPage('main', {
    title: '404',
    attr: {
        class: 'layout',
    },
});
export const error500 = new ErrorPage('main', {
    title: '500',
    attr: {
        class: 'layout',
    },
});

export const modalsPage = new ModalsPage();
