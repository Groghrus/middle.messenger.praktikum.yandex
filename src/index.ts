import './assets/main.scss'
import Handlebars from 'handlebars'
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
})


