import '../../assets/main.scss'
import Handlebars from 'handlebars'
import profilePwd from '../../templates/profile.tmpl.js';

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
  const root = document.querySelector('#profile-pwd')

  const template = Handlebars.compile(profilePwd)

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
          inputLabel: 'Старый пароль',
          inputPlHolder: 'Старый пароль',
          inputName: 'password',
          inputType: 'password',
          inputValue: '•••••••••'
        },
        {
          inputLabel: 'Новый пароль',
          inputPlHolder: 'Новый пароль',
          inputName: 'password',
          inputType: 'password',
          inputValue: '•••••••••'
        },
        {
          inputLabel: 'Повторите новый пароль',
          inputPlHolder: 'Повторите новый пароль',
          inputName: 'password',
          inputType: 'password',
          inputValue: '•••••••••'
        }
      ]
    })
  ]

  root.innerHTML = result
})
