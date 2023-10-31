import '../../assets/main.scss'
import Handlebars from 'handlebars'
import profileEdit from '../../templates/profile.tmpl.js';

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
  const root = document.querySelector('#profile-edit')

  const template = Handlebars.compile(profileEdit)

  const result = [
    template({
      text: 'Иван',
      save: true,
      title: 'Сохранить',
      className: 'btn btn-second text-white fix-width',
      btnWrap: true,
      editInputs: true,
      fields: [
        {
          inputLabel: 'Почта',
          inputPlHolder: 'Почта',
          inputName: 'email',
          inputType: 'email',
          inputValue: 'pochta@yandex.ru'
        },
        {
          inputLabel: 'Логин',
          inputPlHolder: 'Логин',
          inputName: 'login',
          inputType: 'text',
          inputValue: 'ivanivanov'
        },
        {
          inputLabel: 'Имя',
          inputPlHolder: 'Имя',
          inputName: 'first_name',
          inputType: 'text',
          inputValue: 'Иван',
        },
        {
          inputLabel: 'Фамилия',
          inputPlHolder: 'Фамилия',
          inputName: 'second_name',
          inputType: 'text',
          inputValue: 'Иванов',
        },
        {
          inputLabel: 'Имя в чате',
          inputPlHolder: 'Имя в чате',
          inputName: 'display_name',
          inputType: 'text',
          inputValue: 'Иван',
        },
        {
          inputLabel: 'Телефон',
          inputPlHolder: 'Телефон',
          inputName: 'phone',
          inputType: 'text',
          inputValue: '+7 (999) 999 99 99',
        }
      ]
    })
  ]

  root.innerHTML = result
})
