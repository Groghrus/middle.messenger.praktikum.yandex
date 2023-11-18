/* eslint-disable */
import Block from '../../lib/Block.ts';
import template from '../auth/auth.tmpl.ts';
import Button from '../../components/button';
import Input from '../../components/input';
import { formValidation } from '../../utils/validation.ts';

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
              const { form } = e.target;
              const inputs = e.target.form.querySelectorAll('input');
              formValidation(form, inputs, true);
            },
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
            click: (e: any) => {
              const { form } = e.target;
              const inputs = e.target.form.querySelectorAll('input');
              formValidation(form, inputs, true);
            },
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
        }),
        new Input('div', {
          inputLabel: 'Логин',
          inputName: 'login',
          inputType: 'text',
          attr: {
            class: 'input-wrapper input-text text-10-400 text-grey',
          },
        }),
        new Input('div', {
          inputLabel: 'Имя',
          inputName: 'first_name',
          inputType: 'text',
          attr: {
            class: 'input-wrapper input-text text-10-400 text-grey',
          },
        }),
        new Input('div', {
          inputLabel: 'Фамилия',
          inputName: 'second_name',
          inputType: 'text',
          attr: {
            class: 'input-wrapper input-text text-10-400 text-grey',
          },
        }),
        new Input('div', {
          inputLabel: 'Телефон',
          inputName: 'phone',
          inputType: 'text',
          attr: {
            class: 'input-wrapper input-text text-10-400 text-grey',
          },
        }),
        new Input('div', {
          inputLabel: 'Пароль',
          inputName: 'password',
          inputType: 'password',
          attr: {
            class: 'input-wrapper input-text text-10-400 text-grey',
          },
        }),
        new Input('div', {
          inputLabel: 'Пароль (ещё раз)',
          inputName: 'password',
          inputType: 'password',
          attr: {
            class: 'input-wrapper input-text text-10-400 text-grey',
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
