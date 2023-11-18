import Block from '../../lib/Block.ts';
import template from './profile.tmpl.ts';
import AvatarProfile from '../../components/profile/avatar';
import TextField from '../../components/profile/field';
import ButtonProfile from '../../components/profile/button';


export default class ProfilePage extends Block {
    render() {
        this._props = {
            attr: {
                class: 'd-flex align-c justify-c'
            }
        }
        return this.compile(template, this._props)
    }

    constructor( ) {

        super('div', {
            avatarProfile: new AvatarProfile(
                    'div',
                {
                    exit: true,
                    text: 'Дмитрий',
                    attr: {
                        class: 'profile-avatar d-flex align-c justify-c direction-col'
                    }
                }
            ),
            textFields: false,
            fields: [
                    new TextField(
                    'div',
                    {
                        title: 'Почта',
                        field: 'pochta@yandex.ru',
                        attr: {
                            class: 'text-field'
                        }
                    }
                ),
                new TextField(
                    'div',
                    {
                        title: 'Логин',
                        field: 'DmDm',
                        attr: {
                            class: 'text-field'
                        }
                    }
                ),
                new TextField(
                    'div',
                    {
                        title: 'Имя',
                        field: 'Dmitriy',
                        attr: {
                            class: 'text-field'
                        }
                    }
                ),
                new TextField(
                    'div',
                    {
                        title: 'Фамилия',
                        field: 'Dmitriev',
                        attr: {
                            class: 'text-field'
                        }
                    }
                ),
                new TextField(
                    'div',
                    {
                        title: 'Имя в чате',
                        field: 'Дмитрий',
                        attr: {
                            class: 'text-field'
                        }
                    }
                ),
                new TextField(
                    'div',
                    {
                        title: 'Телефон',
                        field: '+7 (999) 999 99 99',
                        attr: {
                            class: 'text-field'
                        }
                    }
                ),
            ],
            buttons: [
                new ButtonProfile('div',{
                    title: 'Изменить данные',
                    attr: {
                        class: 'profile-link d-flex align-c justify-start'
                    },
                    events: {
                        click: (e: any) => {
                            window.location.pathname = '/profile-edit'
                            e.preventDefault()
                            e.stopPropagation()
                        }
                    }

                }),
                new ButtonProfile('div',{
                    title: 'Изменить пароль',
                    attr: {
                        class: 'profile-link d-flex align-c justify-start'
                    },
                    events: {
                        click: (e: any) => {
                            window.location.pathname = '/password-edit'
                            e.preventDefault()
                            e.stopPropagation()
                        }
                    }
                }),
                new ButtonProfile('div',{
                    title: 'Выход',
                    attr: {
                        class: 'profile-link exit d-flex align-c justify-start'
                    },
                    events: {
                        click: (e: any) => {
                            window.location.pathname = '/'
                            e.preventDefault()
                            e.stopPropagation()
                        }
                    }
                }),
            ]

        })
    }
}
