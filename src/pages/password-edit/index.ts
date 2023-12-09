/* eslint-disable */
import Block from '../../lib/Block.ts';
import template from '../profile/profile.tmpl.ts';
import AvatarProfile from '../../components/profile/avatar';
import InputProfile from '../../components/profile/input';
import Button from '../../components/button';
import { formValidation, inputValidation } from '../../utils/validation.ts';
import ProfileController from '../../controllers/ProfileController.ts';
import AuthController from '../../controllers/AuthController.ts';
import {API_URL} from '../../utils/HTTPtransporter.ts';
import {connectStore, State} from '../../lib/Store.ts';

class ProfilePwdEdit extends Block {

    constructor() {
        super('div', {});
    }
  init() {

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
      this._children.oldPassword = new InputProfile(
          'div',
          {
              inputLabel: 'Старый пароль',
              inputPlHolder: 'Старый пароль',
              inputName: 'oldPassword',
              inputType: 'password',
              inputValue: '',
              attr: {
                  class: 'text-field',
              },
              events: {
                  blur: inputValidation
              },
          },
      );
      this._children.newPassword = new InputProfile(
              'div',
              {
                  inputLabel: 'Новый пароль',
                  inputPlHolder: 'Новый пароль',
                  inputName: 'newPassword',
                  inputType: 'password',
                  inputValue: '',
                  attr: {
                      class: 'text-field',
                  },
                  events: {
                      blur: inputValidation
                  },
              },
          );
      this._children.newPasswordRepeat = new InputProfile(
              'div',
              {
                  inputLabel: 'Повторите новый пароль',
                  inputPlHolder: 'Повторите новый пароль',
                  inputName: 'newPassword',
                  inputType: 'password',
                  inputValue: '',
                  attr: {
                      class: 'text-field',
                  },
                  events: {
                      blur: inputValidation
                  },
              },
      );
      this._children.buttons = new Button('div', {
          title: 'Сохранить',
          type: 'button',
          className: 'btn btn-second text-white fix-width',
          attr: {
              class: 'btn-wrapper d-flex align-c justify-c',
          },
          events: {
              click: (e: Event) => {
                  if (formValidation(e)) {
                      const values = Object
                          .values(this._element.firstElementChild)
                          .filter((child: any) => child.tagName === 'INPUT')
                          .map((child) => ([(child as HTMLInputElement).name, (child as HTMLInputElement).value]))
                      console.log(values)
                      const data = Object.fromEntries(values);
                      console.log(data);
                      if (data.newPassword !== data.oldPassword) {
                          console.log('OK')
                          ProfileController.changePassword(data);
                      } else {
                         console.log('Пароли не должны совпадать')
                      }
                  }
              },
          },
      });
  }

  componentDidMount() {
        AuthController.fetchUser()
  }

componentDidUpdate() {
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

export default connectStore(mapStateToProps)(ProfilePwdEdit)
