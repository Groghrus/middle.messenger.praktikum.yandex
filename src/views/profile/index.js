import '../../assets/main.scss'
import Handlebars from 'handlebars'
import profile from '../../templates/profile.tmpl.js';

import textField from '../../partials/profile/textfield.tmpl.js'
import buttonBack from '../../partials/buttons/button.back.tmpl.js'
import buttonExit from '../../partials/buttons/button.exit.tmpl.js'
import linkProfile from '../../partials/profile/link.profile.tmpl.js'
import avatarProfile from '../../partials/profile/avatar.profile.tmpl.js'
import button from '../../partials/buttons/button.tmpl.js';
import inputPf from '../../partials/inputs/input.profile.tmpl.js'

Handlebars.registerPartial('textField', textField)
Handlebars.registerPartial('buttonBack', buttonBack)
Handlebars.registerPartial('buttonExit', buttonExit)
Handlebars.registerPartial('linkProfile', linkProfile)
Handlebars.registerPartial('avatarProfile', avatarProfile)
Handlebars.registerPartial('button', button)
Handlebars.registerPartial('inputPf', inputPf)

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#profile')

  const template = Handlebars.compile(profile)

  const result = [
    template({
      text: 'Иван',
      exit: true,
      textFields: true,
      fields: [
        {
          title: 'Почта',
          field: 'pochta@yandex.ru',
        },
        {
          title: 'Логин',
          field: 'ivanivanov',
        },
        {
          title: 'Имя',
          field: 'Иван',
        },
        {
          title: 'Фамилия',
          field: 'Иванов',
        },
        {
          title: 'Имя в чате',
          field: 'Иван',
        },
        {
          title: 'Телефон',
          field: '+7 (909) 967 30 30',
        }
      ],
      links: [
        {
          title: 'Изменить данные',
          href: '../profile-edit/index.html'
        },
        {
          title: 'Изменить пароль',
          href: '../profile-pwd/index.html'
        }
      ],
      buttonExit: {
        title: 'Выход',
        href: '/'
      }
    })
  ]

  root.innerHTML = result
})
