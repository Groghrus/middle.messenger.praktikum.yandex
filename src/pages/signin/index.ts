/* eslint-disable */
import Block from '../../lib/Block.ts';
import template from '../auth/auth.tmpl.ts';
import Button from '../../components/button';
import Input from '../../components/input';
import { formValidation, inputValidation } from '../../utils/validation.ts';
import router from "../../lib/Router.ts";
import AuthController from "../../controllers/AuthController.ts";
import { ISignUp } from "../../api/auth-api.ts";


export default class SigninPage extends Block {
  render() {
    return this.compile(template, {
      text: 'Регистрация',
    });
  }

  constructor() {
    super('form', {
      buttons: [
        new Button('div', {
          title: 'Зарегистрироваться',
          type: 'button',
          className: 'btn btn-second text-white',
          attr: {
            class: 'btn-wrapper',
          },
          events: {
            click: (e: any) => {
              if (formValidation(e)) {
                const values = Object
                    .values(this._element)
                    .filter((child: any) => child.className === "input")
                    .map((child) => ([(child as HTMLInputElement).name, (child as HTMLInputElement).value]))
                const data = Object.fromEntries(values);
                console.log(data)
                AuthController.signUp(data as ISignUp)
              }
            }
          },
        }),
        new Button('div', {
          title: 'Войти',
          type: 'button',
          className: 'btn btn-common text-blue',
          attr: {
            class: 'btn-wrapper',
          },
          events: {
            click: () => {
              router.go('/')
            }
          },
        }),
      ],
      inputs: [
        new Input('div', {
          inputLabel: 'Почта',
          inputName: 'email',
          inputType: 'email',
          attr: {
            class: 'input-wrapper input-text text-10-400 text-grey',
          },
          events: {
            blur: inputValidation
          },
        }),
        new Input('div', {
          inputLabel: 'Логин',
          inputName: 'login',
          inputType: 'text',
          attr: {
            class: 'input-wrapper input-text text-10-400 text-grey',
          },
          events: {
            blur: inputValidation
          },
        }),
        new Input('div', {
          inputLabel: 'Имя',
          inputName: 'first_name',
          inputType: 'text',
          attr: {
            class: 'input-wrapper input-text text-10-400 text-grey',
          },
          events: {
            blur: inputValidation
          },
        }),
        new Input('div', {
          inputLabel: 'Фамилия',
          inputName: 'second_name',
          inputType: 'text',
          attr: {
            class: 'input-wrapper input-text text-10-400 text-grey',
          },
          events: {
            blur: inputValidation
          },
        }),
        new Input('div', {
          inputLabel: 'Телефон',
          inputName: 'phone',
          inputType: 'text',
          attr: {
            class: 'input-wrapper input-text text-10-400 text-grey',
          },
          events: {
            blur: inputValidation
          },
        }),
        new Input('div', {
          inputLabel: 'Пароль',
          inputName: 'password',
          inputType: 'password',
          attr: {
            class: 'input-wrapper input-text text-10-400 text-grey',
          },
          events: {
            blur: inputValidation
          },
        }),
        new Input('div', {
          inputLabel: 'Пароль (ещё раз)',
          inputName: 'password',
          inputType: 'password',
          attr: {
            class: 'input-wrapper input-text text-10-400 text-grey',
          },
          events: {
            blur: inputValidation
          },
        }),
      ],
      attr: {
        id: 'signin-form',
        class: 'form-wrapper d-flex direction-col align-c justify-sb',
      },
    });
  }
}
