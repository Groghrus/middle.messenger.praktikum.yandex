import '../../assets/main.scss'
import Handlebars from 'handlebars'
import modals from '../../templates/modals.tmpl.js';

import button from '../../partials/buttons/button.tmpl.js'
import modal from '../../partials/modal.wndw.tmpl.js'
import input from '../../partials/inputs/input.tmpl.js';
import popup from '../../partials/popup.menu.tmpl.js'


Handlebars.registerPartial('button', button)
Handlebars.registerPartial('modal', modal)
Handlebars.registerPartial('input', input)
Handlebars.registerPartial('popup', popup)



document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#modals')

  const template = Handlebars.compile(modals)

  const result = [
    template({
      text: 'Модальные окна',
      modals: [
        {
          modalTitle: 'Загрузите файл',
          colorText: 'text-dark',
          mLink: true,
          btnWrap: true,
          title: 'Поменять',
          className: 'btn btn-second text-white',
          mAlert: true
        },
        {
          modalTitle: 'Файл загружен',
          mFile: true,
          btnWrap: true,
          titleFile: 'pic.jpg',
          title: 'Поменять',
          className: 'btn btn-second text-white'
        },
        {
          modalTitle: 'Ошибка, попробуйте ещё раз',
          colorText: 'text-red',
          mLink: true,
          btnWrap: true,
          title: 'Поменять',
          className: 'btn btn-second text-white'
        },
      ],
      modalsCRUD: [
        {
          modalTitle: 'Удалить пользователя',
          phType: 'Логин',
          colorText: 'text-dark',
          btnWrap: true,
          title: 'Удалить',
          className: 'btn btn-second text-white',
          mInput: true
        },
        {
          modalTitle: 'Добавить пользователя',
          phType: 'Логин',
          colorText: 'text-dark',
          btnWrap: true,
          title: 'Добавить',
          className: 'btn btn-second text-white',
          mInput: true
        }
      ],
      menu: [
        {
          settings: true
        },
        {
          mediafiles: true
        }
      ]
    })
  ]

  root.innerHTML = result
})
