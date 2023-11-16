import template from './chat.tmpl.ts';
import Block from '../../lib/Block.ts';
import Panel from '../../components/chat/panel';
import InputSearch from '../../components/inputSearch';
import LinkProfile from '../../components/linkProfile';
import Card from '../../components/card';
import Dialog from '../../components/chat/dialog';
import DialogHeader from '../../components/chat/dialog/dialogHeader';
import DialogFooter from '../../components/chat/dialog/dialogFooter';
import Input from '../../components/input';
import msgCard from '../../components/card/msgCard';


export default class ChatPage extends Block {
    render() {
        return this.compile(template, {
            plug: 'Выберите чат чтобы отправить сообщение',
        })
    }
    constructor() {
        super(
            'div',
            {
                panel: new Panel(
                    'div',
                    {
                        linkProfile: new LinkProfile(
                            'div',
                            {
                                title: 'Профиль',
                                attr: {
                                    class: 'link-info d-flex align-c justify-end'
                                },
                                events: {
                                    click: (e: any) => {
                                        window.location.pathname = '/profile'
                                        e.preventDefault()
                                        e.stopPropagation()
                                    }
                                }
                            }
                        ),
                        inputSearch: new InputSearch(
                            'div',
                            {
                                inputPlHolder: 'Поиск',
                                inputType: 'search',
                                inputName: 'search',
                                attr: {
                                    class: 'search'
                                }
                            }
                        ),
                        attr: {
                            class: 'top'
                        }
                    }
                ),
                usersList: [
                    new Card(
                        'div',
                        {
                            userName: 'User 1',
                            userMsg: 'Изображение',
                            lastMsgTime: '10:10',
                            msgCount: '2'
                        }
                    ),
                    new Card(
                        'div',
                        {
                            userName: 'User 2',
                            userMsg: 'Сообщение',
                            lastMsgTime: 'Чт',
                            msgCount: '5'
                        }
                    )
                ],
                dialog: [
                    new DialogHeader(
                        'div',
                        {
                            userName: 'Вася Пупкин',
                            attr: {
                                class: 'dialog-header'
                            }
                        }
                    ),
                    new Dialog(
                        'div',
                        {
                            date: '14 июня',
                            messages: [
                                new msgCard(
                                    'div',
                                    {
                                        text: 'Contact',
                                        time: '12:40',
                                        attr: {
                                            class: 'msg-row msg-row__contact'
                                        }
                                    }
                                ),
                                new msgCard(
                                    'div',
                                    {
                                        text: 'User',
                                        time: '12:42',
                                        attr: {
                                            class: 'msg-row msg-row__user'
                                        }
                                    }
                                )
                            ],
                            attr: {
                                class: 'dialog-main'
                            }
                        }
                    ),
                    new DialogFooter(
                        'div',
                        {
                            userName: 'Вася Пупкин',
                            inputMsg: new Input(
                                'div',
                                {
                                    inputPlHolder: 'Сообщение',
                                    inputType: 'text',
                                    inputName: 'message',
                                    attr: {
                                        class: 'input-wrapper input-text input-msg text-10-400 text-grey'
                                    }
                                }
                            ),
                            attr: {
                                class: 'dialog-footer'
                            }
                        }
                    )
                ],
                attr: {
                    class: 'container'
                }
            }
        );
    }

}
