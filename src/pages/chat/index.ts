import template from './chat.tmpl.ts';
import Block from '../../lib/Block.ts';
import Panel from '../../components/chat/panel';
import InputSearch from '../../components/inputSearch';
import LinkProfile from '../../components/linkProfile';


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
                usersList: '',
                dialog: '',
                attr: {
                    class: 'container'
                }
            }
        );
    }

}
