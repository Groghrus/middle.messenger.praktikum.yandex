import Block from '../../lib/Block.ts';
import template from './modals.tmpl.ts';
import Modal from '../../components/modal';
import Button from '../../components/button';
import Input from '../../components/input';
import Actions from '../../components/popup/actions';
import Files from '../../components/popup/files';

export default class ModalsPage extends Block {
    render() {
        return this.compile(template, this._props)
    }
    constructor() {
        super(
            'main', {
                modals: [
                    new Modal(
                        'div',
                        {
                            modalTitle: 'Загрузите файл',
                            mLink: true,
                            mAlert: true,
                            button: new Button(
                                'div',
                                {
                                    title: 'Поменять',
                                    className: 'btn btn-second text-white',
                                    attr: {
                                        class: 'btn-wrapper d-flex justify-c'
                                    }
                                }
                            ),
                            attr: {
                                class: 'modal'
                            }
                        }
                    ),
                    new Modal(
                        'div',
                        {
                            modalTitle: 'Файл загружен',
                            titleFile: 'pic.jpg',
                            mFile: true,
                            mAlert: false,
                            button: new Button(
                                'div',
                                {
                                    title: 'Поменять',
                                    className: 'btn btn-second text-white',
                                    attr: {
                                        class: 'btn-wrapper d-flex justify-c'
                                    }
                                }
                            ),
                            attr: {
                                class: 'modal'
                            }
                        }
                    ),
                    new Modal(
                        'div',
                        {
                            modalTitle: 'Ошибка, попробуйте ещё раз',
                            mLink: true,
                            mAlert: false,
                            colorText: 'text-red',
                            button: new Button(
                                'div',
                                {
                                    title: 'Поменять',
                                    className: 'btn btn-second text-white',
                                    attr: {
                                        class: 'btn-wrapper d-flex justify-c'
                                    }
                                }
                            ),
                            attr: {
                                class: 'modal'
                            }
                        }
                    )
                ],
                modalsCRUD: [
                    new Modal(
                        'div',
                        {
                            modalTitle: 'Удалить пользователя',
                            colorText: 'text-dark',
                            mLink: false,
                            mAlert: false,
                            inputs: [
                                new Input('div', {
                                    inputLabel: 'Логин',
                                    inputName: 'login',
                                    inputType: 'text',
                                    attr: {
                                        class: 'input-wrapper input-text text-10-400 text-grey',
                                    }
                                }),
                            ],
                            button: new Button(
                                'div',
                                {
                                    title: 'Удалить',
                                    className: 'btn btn-second text-white',
                                    attr: {
                                        class: 'btn-wrapper d-flex justify-c'
                                    }
                                }
                            ),
                            attr: {
                                class: 'modal'
                            }
                        }
                    ),
                    new Modal(
                        'div',
                        {
                            modalTitle: 'Добавить пользователя',
                            colorText: 'text-dark',
                            mLink: false,
                            mAlert: false,
                            inputs: [
                                new Input('div', {
                                    inputLabel: 'Логин',
                                    inputName: 'login',
                                    inputType: 'text',
                                    attr: {
                                        class: 'input-wrapper input-text text-10-400 text-grey',
                                    }
                                }),
                            ],
                            button: new Button(
                                'div',
                                {
                                    title: 'Добавить',
                                    className: 'btn btn-second text-white',
                                    attr: {
                                        class: 'btn-wrapper d-flex justify-c'
                                    }
                                }
                            ),
                            attr: {
                                class: 'modal'
                            }
                        }
                    )
                ],
                popup: [
                    new Actions(
                        'div',{
                            attr: {
                                class: 'popup'
                            }
                        }
                    ),
                    new Files(
                        'div',{
                            attr: {
                                class: 'popup'
                            }
                        }
                    )
                ],
                attr: {
                    class: 'layout overlay'
                }
            }
        );
    }
}
