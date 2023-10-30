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
          phType: 'Почта',
          className: ''
        },
        {
          phType: 'Логин',
          className: ''
        },
        {
          phType: 'Имя',
          className: ''
        },
        {
          phType: 'Фамилия',
          className: ''
        },
        {
          phType: 'Телефон',
          className: ''
        },
        {
          phType: 'Пароль',
          className: ''
        },
        {
          phType: 'Пароль (ещё раз)',
          className: ''
        },
      ]
    })
  ]

  root.innerHTML = result
})
