/* eslint-disable */
import Block from '../../lib/Block.ts';
import template from '../profile/profile.tmpl.ts';
import AvatarProfile from '../../components/profile/avatar';
import InputProfile from '../../components/profile/input';
import Button from '../../components/button';

export default class ProfilePwdEdit extends Block {
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
            inputLabel: 'Старый пароль',
            inputPlHolder: 'Старый пароль',
            inputName: 'password',
            inputType: 'password',
            inputValue: '•••••••••',
            attr: {
              class: 'text-field',
            },
          },
        ),
        new InputProfile(
          'div',
          {
            inputLabel: 'Новый пароль',
            inputPlHolder: 'Новый пароль',
            inputName: 'password',
            inputType: 'password',
            inputValue: '•••••••••',
            attr: {
              class: 'text-field',
            },
          },
        ),
        new InputProfile(
          'div',
          {
            inputLabel: 'Повторите новый пароль',
            inputPlHolder: 'Повторите новый пароль',
            inputName: 'password',
            inputType: 'password',
            inputValue: '•••••••••',
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
