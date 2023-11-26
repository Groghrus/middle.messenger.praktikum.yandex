/* eslint-disable */
import template from './auth.tmpl.ts';
import Block from '../../lib/Block.ts';
import Button from '../../components/button';
import Input from '../../components/input';
import {formValidation, inputValidation} from '../../utils/validation.ts';
import router from '../../lib/Router.ts';
import AuthController from "../../controllers/AuthController.ts";

export default class AuthPage extends Block {
  render() {
    return this.compile(template, {
      text: 'Вход',
    });
  }

  constructor() {
    super('form', {
      buttons: [
        new Button('div', {
          title: 'Авторизоваться',
          className: 'btn btn-second text-white',
          attr: {
            class: 'btn-wrapper',
          },
          events: {
            click: (e: any) => {
              if(formValidation(e)) {
                 const values = Object
                    .values(this._element)
                    .filter((child: any) => child.tagName === "INPUT")
                    .map((child) => ([(child as HTMLInputElement).name, (child as HTMLInputElement).value]))
                 const data = Object.fromEntries(values);
                 console.log(data)
                  AuthController.signIn(data)
                }
            },
          },
        }),
        new Button('div', {
          title: 'Нет аккаунта?',
          type: 'button',
          className: 'btn btn-common text-blue',
          attr: {
            class: 'btn-wrapper',
          },
          events: {
            click: () => {
              router.go('/sign-up')
            },
          },
        }),
      ],
      inputs: [
        new Input('div', {
          inputLabel: 'Логин',
          inputName: 'login',
          inputType: 'text',
          inputValue: 'Grogh',
          inputPlHolder: '',
          events: {
            blur: inputValidation
          },
          attr: {
            class: 'input-wrapper',
          },
        }),
        new Input('div', {
          inputLabel: 'Пароль',
          inputName: 'password',
          inputType: 'password',
          inputValue: 'Pwd12345',
          inputPlHolder: '',
          events: {
            blur: inputValidation
          },
          attr: {
            class: 'input-wrapper input-text text-10-400 text-grey',
          },
        }),
      ],
      modalsBtn: [
        new Button(
            'div', {
              title: 'Зайти в чат',
              type: '',
              className: '',
              events: {
                click: (e: any) => {
                  window.location.pathname = '/chat';
                  e.preventDefault();
                  e.stopPropagation();
                },
              },
              attr: {
                class: 'btn-wrapper d-flex justify-c',
              },
            },
        ),
        new Button(
          'div', {
            title: 'Модальные окна',
            type: '',
            className: '',
            events: {
              click: (e: any) => {
                window.location.pathname = '/modals';
                e.preventDefault();
                e.stopPropagation();
              },
            },
            attr: {
              class: 'btn-wrapper d-flex justify-c',
            },
          },
        ),
        new Button(
          'div',
          {
            title: 'Error 404',
            type: '',
            className: '',
            events: {
              click: (e: any) => {
                window.location.pathname = '/err404';
                e.preventDefault();
                e.stopPropagation();
              },
            },
            attr: {
              class: 'btn-wrapper d-flex justify-c',
            },
          },
        ),
        new Button(
          'div',
          {
            title: 'Error 500',
            type: '',
            className: '',
            events: {
              click: (e: any) => {
                window.location.pathname = '/err500';
                e.preventDefault();
                e.stopPropagation();
              },
            },
            attr: {
              class: 'btn-wrapper d-flex justify-c',
            },
          },
        ),
      ],
      attr: {
        id: 'auth-form',
        class: 'form-wrapper d-flex direction-col align-c justify-sb',
      },
    });
  }
}
