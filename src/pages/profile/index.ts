/* eslint-disable */
import Block from '../../lib/Block.ts';
import template from './profile.tmpl.ts';
import AvatarProfile from '../../components/profile/avatar';
import TextField from '../../components/profile/field';
import ButtonProfile from '../../components/profile/button';
import AuthController from "../../controllers/AuthController.ts";
import router, {Routes} from '../../lib/Router.ts';
import {connectStore, State} from "../../lib/Store.ts";
import InputFile from '../../components/profile/avatar/input';
import ProfileController from '../../controllers/ProfileController.ts';
import {API_URL} from '../../utils/HTTPtransporter.ts';
import Router from '../../lib/Router.ts';


class ProfilePage extends Block {


  constructor() {
      super('div', {
          buttons: [
              new ButtonProfile('div', {
                  title: 'Изменить данные',
                  attr: {
                      class: 'profile-link d-flex align-c justify-start',
                  },
                  events: {
                      click: () => {
                          router.go('/settings');
                      },
                  },
              }),
              new ButtonProfile('div', {
                  title: 'Изменить пароль',
                  attr: {
                      class: 'profile-link d-flex align-c justify-start',
                  },
                  events: {
                      click: () => {
                          router.go('/password-edit');
                      },
                  },
              }),
              new ButtonProfile('div', {
                  title: 'Выход',
                  attr: {
                      class: 'profile-link exit d-flex align-c justify-start',
                  },
                  events: {
                      click: () => {
                          AuthController.logout();
                          Router.go(Routes.Auth)
                      }

                  },
              }),
          ],
      });

  }
  init() {
      this._children.avatarProfile = new AvatarProfile(
          'div',
          {
              exit: true,
              text: '',
              // `https://ya-praktikum.tech/api/v2/resources/${user.avatar}`
              src: '',
              inputAvatar: new InputFile('div', {
                  inputLabel: 'Поменять автар',
                  inputType: 'file',
                  inputName: 'avatar',
                  attr: {
                      class: 'photo-text'
                  },
                  events: {
                      change: (e) => {
                          const fileInput = e.target;
                          // @ts-ignore
                          if (!fileInput.files) {
                              return;
                          }
                          // @ts-ignore
                          const avatar = fileInput.files[0];
                          const formData = new FormData();
                          formData.append('avatar', avatar);
                          ProfileController.changeAvatar(formData);
                      }
                  }
              }),
              attr: {
                  class: 'profile-avatar d-flex align-c justify-c direction-col',
              }
          }
      );
      this._children.email = new TextField(
          'div',
          {
              title: 'Почта',
              field: 'Почта',
              attr: {
                  class: 'text-field'
              },
          }
      );
      this._children.login = new TextField(
              'div',
              {
                  title: 'Логин',
                  field: 'DmDm',
                  attr: {
                      class: 'text-field',
                  },
              }
          );
      this._children.firstName = new TextField(
              'div',
              {
                  title: 'Имя',
                  field: 'Dmitriy',
                  attr: {
                      class: 'text-field',
                  },
              }
          );
      this._children.secondName = new TextField(
              'div',
              {
                  title: 'Фамилия',
                  field: 'Dmitriev',
                  attr: {
                      class: 'text-field',
                  },
              }
          );
      this._children.displayName = new TextField(
              'div',
              {
                  title: 'Имя в чате',
                  field: 'Дмитрий',
                  attr: {
                      class: 'text-field',
                  },
              }
          );
      this._children.phone = new TextField(
              'div',
              {
                  title: 'Телефон',
                  field: '+7 (999) 999 99 99',
                  attr: {
                      class: 'text-field',
                  },
              }
          );
  }
  componentDidMount() {
      AuthController.fetchUser()
  }
  componentDidUpdate() {
      (this._children.email as TextField).setProps({field: this._props.email});
      (this._children.login as TextField).setProps({field: this._props.login});
      (this._children.firstName as TextField).setProps({field: this._props.first_name});
      (this._children.secondName as TextField).setProps({field: this._props.second_name});
      (this._children.displayName as TextField).setProps({field: this._props.display_name});
      (this._children.phone as TextField).setProps({field: this._props.phone});
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
        }
     };
     return this.compile(template, this._props);
  }

}

const mapStateToProps = (state: State) => {
    return { ...state.user };
};

export default connectStore(mapStateToProps)(ProfilePage)

