import './assets/main.scss'
import AuthPage from './pages/auth';
import SigninPage from './pages/signin';
import MainLayout from './layout/main';
import ErrorPage from './pages/error';


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
      title: '404',
      attr: {
        class: 'layout'
      }
    },
)

const ROUTES = {
  auth: '/',
  signin: '/signin',
  err404: '/err404',
  err500: '/err500'
}

const changeRoute = () => {
  let path = window.location.pathname
  if (path === ROUTES.auth) {
    return authPage
  }
  if (path === ROUTES.signin) {
    return signinPage
  }
  if (path === ROUTES.err404) {
    return error404
  }
  if (path === ROUTES.err500) {
    return error500
  }
}



window.addEventListener('DOMContentLoaded', () => {
  let path = window.location.pathname
  console.log('path', path)
  const root = document.getElementById('app');

  if (root) {
    const component: MainLayout = changeRoute()
    root.append(component._element!);
    component.dispatchComponentDidMount();
  }
});
















/*import Handlebars from 'handlebars'
// @ts-ignore
import auth from './templates/auth.tmpl.js'

// @ts-ignore
import button from './partials/buttons/button.tmpl.js'
// @ts-ignore
import input from './partials/inputs/input.tmpl.js'
// @ts-ignore
import link from './partials/buttons/link.tmpl.js'

Handlebars.registerPartial('button', button)
Handlebars.registerPartial('input', input)
Handlebars.registerPartial('link', link)
document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')

  const template = Handlebars.compile(auth)

  const result = [
    template({
      text: 'Вход',
      buttons: [
        {
          aWrap: true,
          title: 'Авторизоваться',
          className: 'btn btn-second text-white',
          src: '../views/home/index.html'
        },
        {
          aWrap: true,
          title: 'Нет аккаунта?',
          className: 'btn btn-common text-blue',
          src: '../views/signin/index.html'
        },
      ],
      inputs: [
        {
          inputLabel: 'Логин',
          inputName: 'login',
          inputType: 'text'
        },
        {
          inputLabel: 'Пароль',
          inputName: 'password',
          inputType: 'password'
        },
    ]
    })
  ]

  // @ts-ignore
  root.innerHTML = result
})*/
