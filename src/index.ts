import './assets/main.scss';
import AuthPage from './pages/auth';
import SigninPage from './pages/signin';
import MainLayout from './layout/main';
import ErrorPage from './pages/error';
import ChatPage from './pages/chat';
import ProfilePage from './pages/profile';
import ProfileLayout from './layout/profile';
import ButtonBack from './components/buttonBack';
import ProfileEdit from './pages/profile-edit';
import ProfilePwdEdit from './pages/password-edit';
import ModalsPage from './pages/modals';
import Block from './lib/Block.ts';


const authPage = new MainLayout(
    'main',
    {
      content: new AuthPage(),
      attr: {
        class: 'layout'
      }
    }
)
const signinPage = new MainLayout(
    'main',
    {
      content: new SigninPage(),
      attr: {
        class: 'layout'
      }
    }
)
const error404 = new ErrorPage(
    'main', {
      title: '404',
      attr: {
        class: 'layout'
      }
    },
)
const error500 = new ErrorPage(
    'main', {
      title: '500',
      attr: {
        class: 'layout'
      }
    },
)

const chatPage = new ChatPage()

const btnBack = new ButtonBack(
    'div',{
        attr: {
            class: 'profile-page__back'
        }
    })

const profilePage = new ProfileLayout(
    'main', {
        buttonBack: btnBack,
        content: new ProfilePage()
    }
)
const profileEdit = new ProfileLayout(
    'main',{
        buttonBack: btnBack,
        content: new ProfileEdit()
    }
)

const profilePwdEdit = new ProfileLayout(
    'main',{
        buttonBack: btnBack,
        content: new ProfilePwdEdit()
    }
)

const modalsPage = new ModalsPage()

// const ROUTES = {
//   auth: '/',
//   signin: '/signin',
//   err404: '/err404',
//   err500: '/err500',
//   chat: '/chat',
//   profile: '/profile',
//   profileEdit: '/profile-edit',
//   profilePwdEdit: '/password-edit',
//   modals: '/modals'
// }


// const changeRoute = (): any => {
//   let path = window.location.pathname
//   if (path === ROUTES.auth) {
//     return  authPage
//   }
//   if (path === ROUTES.signin) {
//     return signinPage
//   }
//   if (path === ROUTES.err404) {
//     return error404
//   }
//   if (path === ROUTES.err500) {
//     return error500
//   }
//   if (path === ROUTES.chat) {
//     return chatPage
//   }
//   if (path === ROUTES.profile) {
//     return profilePage
//   }
//   if (path === ROUTES.profileEdit) {
//     return profileEdit
//   }
//   if (path === ROUTES.profilePwdEdit) {
//     return profilePwdEdit
//   }
//   if (path === ROUTES.modals) {
//     return modalsPage
//   }
// }


// window.addEventListener('DOMContentLoaded', () => {
//   const root = document.getElementById('app');
//
//   if (root) {
//     const component: MainLayout = changeRoute()
//     root.append(component._element!);
//     component.dispatchComponentDidMount();
//   }
// });

const ROUTES2 = {
    '/': authPage,
    '/signin': signinPage,
    '/err404': error404,
    '/err500': error500,
    '/chat': chatPage,
    '/profile': profilePage,
    '/profile-edit': profileEdit,
    '/password-edit': profilePwdEdit,
    '/modals': modalsPage
}

export const renderDOM = (query: string, block: Block) => {
    const root = document.querySelector(query);

    if (!root) {
        throw new Error(`Элемент ${query} не найден`);
    }

    if (!block.getContent()) {
        return root;
    }

    root.appendChild(block.getContent() as HTMLElement);

    block.dispatchComponentDidMount();

    return root;
};

window.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname as keyof typeof ROUTES2;
    renderDOM('#app', ROUTES2[path]);
});
