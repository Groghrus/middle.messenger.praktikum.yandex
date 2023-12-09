/* eslint-disable */
import template from '../profile/profile.tmpl.ts';
import AvatarProfile from '../../components/profile/avatar';
import Block from '../../lib/Block.ts';
import Button from '../../components/button';
import InputProfile from '../../components/profile/input';
import { inputValidation, formValidation } from '../../utils/validation.ts';
import ProfileController from "../../controllers/ProfileController.ts";
import {connectStore, State} from '../../lib/Store.ts';
import AuthController from '../../controllers/AuthController.ts';
import {API_URL} from '../../utils/HTTPtransporter.ts';


class ProfileEdit extends Block {
    constructor() {
        super('div', {});
    }

    init() {
        this._children.buttons = new Button('div', {
            title: 'Сохранить',
            type: 'button',
            className: 'btn btn-second text-white fix-width',
            attr: {
                class: 'btn-wrapper d-flex align-c justify-c',
            },
            events: {
                click: (e: any) => {
                    if (formValidation(e)) {
                        const values = Object
                            .values(this._element.firstElementChild)
                            .filter((child: any) => child.tagName === 'INPUT')
                            .map((child) => ([(child as HTMLInputElement).name, (child as HTMLInputElement).value]))
                        const data = Object.fromEntries(values);
                        ProfileController.changeProfile(data);
                    }

                },
            },
        });
        this._children.avatarProfile = new AvatarProfile(
            'div',
            {
                exit: true,
                text: '',
                src: '',
                attr: {
                    class: 'profile-avatar d-flex align-c justify-c direction-col',
                }
            }
        );
        this._children.email = new InputProfile(
            'div',
            {
                inputLabel: 'Почта',
                inputValue: 'Почта',
                inputPlHolder: 'Почта',
                inputName: 'email',
                inputType: 'email',
                attr: {
                    class: 'text-field',
                },
                events: {
                    blur: inputValidation
                },
            },
        );
        this._children.login = new InputProfile(
            'div',
            {
                inputLabel: 'Логин',
                inputPlHolder: 'Логин',
                inputName: 'login',
                inputType: 'text',
                inputValue: 'ivanivanov',
                attr: {
                    class: 'text-field',
                },
                events: {
                    blur: inputValidation
                },
            },
        );
        this._children.firstName = new InputProfile(
            'div',
            {
                inputLabel: 'Имя',
                inputPlHolder: 'Имя',
                inputName: 'first_name',
                inputType: 'text',
                inputValue: 'Иван',
                attr: {
                    class: 'text-field',
                },
                events: {
                    blur: inputValidation
                },
            },
        );
        this._children.secondName = new InputProfile(
            'div',
            {
                inputLabel: 'Фамилия',
                inputPlHolder: 'Фамилия',
                inputName: 'second_name',
                inputType: 'text',
                inputValue: 'Иванов',
                attr: {
                    class: 'text-field',
                },
                events: {
                    blur: inputValidation
                },
            },
        );
        this._children.displayName = new InputProfile(
            'div',
            {
                inputLabel: 'Имя в чате',
                inputPlHolder: 'Имя в чате',
                inputName: 'display_name',
                inputType: 'text',
                inputValue: 'Иван',
                attr: {
                    class: 'text-field',
                },
                events: {
                    blur: inputValidation
                },
            },
        );
        this._children.phone = new InputProfile(
            'div',
            {
                inputLabel: 'Телефон',
                inputPlHolder: 'Телефон',
                inputName: 'phone',
                inputType: 'text',
                inputValue: '+7 (999) 999 99 99',
                attr: {
                    class: 'text-field',
                },
                events: {
                    blur: inputValidation

                },
            },
        );
    }
    componentDidMount() {
        AuthController.fetchUser()
    }
    componentDidUpdate() {
        (this._children.email as InputProfile).setProps({inputValue: this._props.email});
        (this._children.login as InputProfile).setProps({inputValue: this._props.login});
        (this._children.firstName as InputProfile).setProps({inputValue: this._props.first_name});
        (this._children.secondName as InputProfile).setProps({inputValue: this._props.second_name});
        (this._children.displayName as InputProfile).setProps({inputValue: this._props.display_name});
        (this._children.phone as InputProfile).setProps({inputValue: this._props.phone});
        (this._children.avatarProfile as AvatarProfile).setProps({
            text: this._props.first_name,
            src: `${API_URL}/resources` + this._props.avatar
        });
        return true
    }

    render() {
    this._props = {
      attr: {
        class: 'd-flex align-c justify-c',
      },
    };
    return this.compile(template, this._props);
  }

}
const mapStateToProps = (state: State) => {
    return { ...state.user };
};

export default connectStore(mapStateToProps)(ProfileEdit)
