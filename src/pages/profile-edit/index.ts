/* eslint-disable */
import template from '../profile/profile.tmpl.ts';
import AvatarProfile from '../../components/profile/avatar';
import Block from '../../lib/Block.ts';
import Button from '../../components/button';
import InputProfile from '../../components/profile/input';

export default class ProfileEdit extends Block {
  render() {
    this._props = {
      attr: {
        class: 'd-flex align-c justify-c',
      },
    };
    return this.compile(template, this._props);
  }

  constructor() {
    super('div', {
      avatarProfile: new AvatarProfile(
        'div',
        {
          exit: false,
          text: 'Дмитрий',
          attr: {
            class: 'profile-avatar d-flex align-c justify-c direction-col',
          },
        },
      ),
      fields: [
        new InputProfile(
          'div',
          {
            inputLabel: 'Почта',
            inputValue: 'pochta@yandex.ru',
            inputPlHolder: 'Почта',
            inputName: 'email',
            inputType: 'email',
            attr: {
              class: 'text-field',
            },
          },
        ),
        new InputProfile(
          'div',
          {
            inputLabel: 'Логин',
            inputPlHolder: 'Логин',
            inputName: 'login',
            inputType: 'text',
            inputValue: 'ivanivanov',
            attr: {
              class: 'text-field',
            },
          },
        ),
        new InputProfile(
          'div',
          {
            inputLabel: 'Имя',
            inputPlHolder: 'Имя',
            inputName: 'first_name',
            inputType: 'text',
            inputValue: 'Иван',
            attr: {
              class: 'text-field',
            },
          },
        ),
        new InputProfile(
          'div',
          {
            inputLabel: 'Фамилия',
            inputPlHolder: 'Фамилия',
            inputName: 'second_name',
            inputType: 'text',
            inputValue: 'Иванов',
            attr: {
              class: 'text-field',
            },
          },
        ),
        new InputProfile(
          'div',
          {
            inputLabel: 'Имя в чате',
            inputPlHolder: 'Имя в чате',
            inputName: 'display_name',
            inputType: 'text',
            inputValue: 'Иван',
            attr: {
              class: 'text-field',
            },
          },
        ),
        new InputProfile(
          'div',
          {
            inputLabel: 'Телефон',
            inputPlHolder: 'Телефон',
            inputName: 'phone',
            inputType: 'text',
            inputValue: '+7 (999) 999 99 99',
            attr: {
              class: 'text-field',
            },
          },
        ),
      ],
      buttons: [
        new Button('div', {
          title: 'Сохранить',
          type: 'button',
          className: 'btn btn-second text-white fix-width',
          attr: {
            class: 'btn-wrapper d-flex align-c justify-c',
          },
          events: {
            click: (e: any) => {
              window.location.pathname = '/profile';
              e.preventDefault();
              e.stopPropagation();
            },
          },
        }),
      ],

    });
  }
}
