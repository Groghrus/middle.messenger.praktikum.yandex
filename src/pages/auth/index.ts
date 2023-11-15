import template from './auth.tmpl.ts';
import Block from '../../lib/Block.ts';
import Button from '../../components/button';
import Input from '../../components/input'

export default class AuthPage extends Block {
    render() {
        return this.compile(template, {
            text: 'Вход'
        })
    }
    constructor() {
        super('div', {
            buttons: [
                new Button('div', {
                    title: 'Авторизоваться',
                    type: 'button',
                    className: 'btn btn-second text-white',
                    attr: {
                        class: 'btn-wrapper'
                    }
                }
                ),
                new Button('div', {
                    title: 'Нет аккаунта?',
                    type: 'button',
                    className: 'btn btn-common text-blue',
                    attr: {
                        class: 'btn-wrapper'
                    },
                    events: {
                        click: (e: any) => {
                            window.location.pathname = '/signin'
                            e.preventDefault()
                            e.stopPropagation()
                            console.log('Нет аккаунта? click')
                        }
                    }
                })
            ],
            inputs: [
                new Input('div', {
                    inputLabel: 'Логин',
                    inputName: 'login',
                    inputType: 'text',
                    attr: {
                        class: 'input-wrapper input-text text-10-400 text-grey',
                    }
                }),
                new Input('div', {
                    inputLabel: 'Пароль',
                    inputName: 'password',
                    inputType: 'password',
                    attr: {
                        class: 'input-wrapper input-text text-10-400 text-grey'
                    }
                })
            ],
            attr: {
                class: 'form-wrapper d-flex direction-col align-c justify-sb'
            }
        })
    }
}
