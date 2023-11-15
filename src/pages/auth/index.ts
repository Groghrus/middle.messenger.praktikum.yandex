import template from './auth.tmpl.ts';
import Block from '../../lib/Block.ts';
import Button from '../../components/button';
import Input from '../../components/input';
import {validation} from '../../utils/validation.ts';

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
                    },
                    events: {
                        click: (e: any) => {
                            window.location.pathname = '/chat'
                            e.preventDefault()
                            e.stopPropagation()
                        }
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
                        class: 'input-wrapper',
                    },
                    events: {
                        input: (e: any) => {
                            const input = e.target
                            if (!input.value) {return null}
                            const newValue = validation(input.name, input.value)
                            if (!newValue) {
                                input.classList.add('error-text')
                                return null
                            }
                            input.classList.remove('error-text')
                            input.value = newValue
                        }
                    }
                }),
                new Input('div', {
                    inputLabel: 'Пароль',
                    inputName: 'password',
                    inputType: 'password',
                    attr: {
                        class: 'input-wrapper input-text text-10-400 text-grey'
                    },
                    events: {}
                })
            ],
            attr: {
                class: 'form-wrapper d-flex direction-col align-c justify-sb'
            }
        })
    }
}
