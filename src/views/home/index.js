import '../../assets/main.scss'
import Handlebars from 'handlebars'
import home from '../../templates/home.tmpl.js';

import button from '../../partials/buttons/button.tmpl.js'
import input from '../../partials/inputs/input.tmpl.js'
import inputMsg from '../../partials/inputs/input.msg.tmpl.js'
import link from '../../partials/buttons/link.tmpl.js'
import search from '../../partials/inputs/search.tmpl.js'
import card from '../../partials/card.tmpl.js'
import dialogHeader from '../../partials/dialog/dialog.header.tmpl.js'
import dialog from '../../partials/dialog/dialog.tmpl.js'
import dialogFooter from '../../partials/dialog/dialog.footer.tmpl.js'
import avatar from '../../partials/avatar.tmpl.js'
import btnStaple from '../../partials/buttons/button.staple.tmpl.js'
import btnSend from '../../partials/buttons/button.send.tmpl.js'
import msgUser from '../../partials/msg.user.tmpl.js'
import msgContact from '../../partials/msg.contact.tmpl.js'


Handlebars.registerPartial('button', button)
Handlebars.registerPartial('input', input)
Handlebars.registerPartial('link', link)
Handlebars.registerPartial('search', search)
Handlebars.registerPartial('card', card)
Handlebars.registerPartial('dialogHeader', dialogHeader)
Handlebars.registerPartial('dialog', dialog)
Handlebars.registerPartial('dialogFooter', dialogFooter)
Handlebars.registerPartial('avatar', avatar)
Handlebars.registerPartial('btnStaple', btnStaple)
Handlebars.registerPartial('btnSend', btnSend)
Handlebars.registerPartial('inputMsg', inputMsg)
Handlebars.registerPartial('msgUser', msgUser)
Handlebars.registerPartial('msgContact', msgContact)

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#home')

  const template = Handlebars.compile(home)

  const result = [
    template({
      text: 'Регистрация',
      link: {
        title: 'Профиль',
        href: '../profile/index.html'
      },
      cards: [
        {
          userName: 'User 1',
          userMsg: 'Изображение',
          lastMsgTime: '10:10'
        },
        {
          userName: 'User 2',
          userMsg: 'Сообщение',
          lastMsgTime: 'Чт'
        },
      ],
      msgContact: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum et non odit perferendis vitae, voluptas.',
        time: '11:50'
      },
      msgUser: {
        text: 'Lorem ipsum dolor sit amet',
        time: '11:47'
      },
      card: {userName: 'User 1',},
      plug: 'Выберите чат чтобы отправить сообщение'
    })
  ]

  root.innerHTML = result
})
