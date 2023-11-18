import template from './auth.tmpl.ts';
import Block from '../../lib/Block.ts';
import Button from '../../components/button';
import Input from '../../components/input';
import {formValidation} from '../../utils/validation.ts';

export default class AuthPage extends Block {

    render() {
        return this.compile(template, {
            text: 'Вход'
        })
    }
    constructor() {
        super('form', {
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
                            const form = e.target.form
                            const inputs = e.target.form.querySelectorAll('input')
                            formValidation(form, inputs)
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
            modalsBtn: [
                new Button(
                'div',
                {
                    title: 'Модальные окна',
                    events: {
                        click: (e: any) => {
                            window.location.pathname = '/modals'
                            e.preventDefault()
                            e.stopPropagation()
                        }
                    },
                    attr: {
                        class: 'btn-wrapper d-flex justify-c'
                    },
                }
                ),
                new Button(
                    'div',
                    {
                        title: 'Error 404',
                        events: {
                            click: (e: any) => {
                                window.location.pathname = '/err404'
                                e.preventDefault()
                                e.stopPropagation()
                            }
                        },
                        attr: {
                            class: 'btn-wrapper d-flex justify-c'
                        },
                    }
                ),
                new Button(
                    'div',
                    {
                        title: 'Error 500',
                        events: {
                            click: (e: any) => {
                                window.location.pathname = '/err500'
                                e.preventDefault()
                                e.stopPropagation()
                            }
                        },
                        attr: {
                            class: 'btn-wrapper d-flex justify-c'
                        },
                    }
                )
            ],
            attr: {
                id: 'auth-form',
                class: 'form-wrapper d-flex direction-col align-c justify-sb'
            }
        })
    }
}
