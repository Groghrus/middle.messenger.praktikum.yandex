import './assets/main.scss'
import Handlebars from 'handlebars'
import auth from './templates/auth.tmpl.js'

import button from './partials/buttons/button.tmpl.js'
import input from './partials/inputs/input.tmpl.js'
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

  root.innerHTML = result
})


