import '../../assets/main.scss'
import Handlebars from 'handlebars'
import signin from '../../templates/signin.tmpl.js';

import button from '../../partials/buttons/button.tmpl.js'
import input from '../../partials/inputs/input.tmpl.js'
import link from '../../partials/buttons/link.tmpl.js'

Handlebars.registerPartial('button', button)
Handlebars.registerPartial('input', input)
Handlebars.registerPartial('link', link)

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#signin')

  const template = Handlebars.compile(signin)

  const result = [
    template({
      text: 'Регистрация',
      buttons: [
        {
          aWrap: true,
          title: 'Зарегистрироваться',
          className: 'btn btn-second text-white',
          src: './index.html'
        },
        {
          aWrap: true,
          title: 'Войти',
          className: 'btn btn-common text-blue',
          src: '../home/index.html'
        },
      ],
      inputs: [
        {
          inputLabel: 'Почта',
          inputName: 'email',
          inputType: 'email'
        },
        {
          inputLabel: 'Логин',
          inputName: 'login',
          inputType: 'text'
        },
        {
          inputLabel: 'Имя',
          inputName: 'first_name',
          inputType: 'text'
        },
        {
          inputLabel: 'Фамилия',
          inputName: 'second_name',
          inputType: 'text'
        },
        {
          inputLabel: 'Телефон',
          inputName: 'phone',
          inputType: 'text'

        },
        {
          inputLabel: 'Пароль',
          inputName: 'password',
          inputType: 'password'

        },
        {
          inputLabel: 'Пароль (ещё раз)',
          inputName: 'password',
          inputType: 'password'
        },
      ]
    })
  ]

  root.innerHTML = result
})
