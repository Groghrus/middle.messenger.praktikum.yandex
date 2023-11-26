/* eslint-disable */
import Block from '../../lib/Block.ts';
import template from './profile.tmpl.ts';
import AvatarProfile from '../../components/profile/avatar';
import TextField from '../../components/profile/field';
import ButtonProfile from '../../components/profile/button';
import AuthController from "../../controllers/AuthController.ts";
import router from "../../lib/Router.ts";
import store, {connectStore, StoreEvents, State} from "../../lib/Store.ts";


export default class ProfilePage extends Block {


  constructor() {
      super('div', {
          avatarProfile: new AvatarProfile(
              'div',
              {
                  exit: true,
                  text: 'Дмитрий',
                  attr: {
                      class: 'profile-avatar d-flex align-c justify-c direction-col',
                  },
              }
          ),
          textFields: false,
          fields: [
              new TextField(
                  'div',
                  {
                      title: 'Почта',
                      field: 'Почта',
                      attr: {
                          class: 'text-field'
                      },
                  }
              ),
              new TextField(
                  'div',
                  {
                      title: 'Логин',
                      field: 'DmDm',
                      attr: {
                          class: 'text-field',
                      },
                  }
              ),
              new TextField(
                  'div',
                  {
                      title: 'Имя',
                      field: 'Dmitriy',
                      attr: {
                          class: 'text-field',
                      },
                  }
              ),
              new TextField(
                  'div',
                  {
                      title: 'Фамилия',
                      field: 'Dmitriev',
                      attr: {
                          class: 'text-field',
                      },
                  }
              ),
              new TextField(
                  'div',
                  {
                      title: 'Имя в чате',
                      field: 'Дмитрий',
                      attr: {
                          class: 'text-field',
                      },
                  }
              ),
              new TextField(
                  'div',
                  {
                      title: 'Телефон',
                      field: '+7 (999) 999 99 99',
                      attr: {
                          class: 'text-field',
                      },
                  }
              ),
          ],
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
                      click: AuthController.logout(),
                  },
              }),
          ],
      });
      let objUser: string

      AuthController.fetchUser()
      store.on(StoreEvents.Updated, (e) => {
          this.setProps(store.getState());
          objUser = this._props.user.email
          console.log('email', objUser)
          console.log('event', e.user)
          const values = Object
              .values(this._element.childNodes).find(el => el)
          console.log('el', values);

      })

  }
  render() {
        this._props = {
            attr: {
                class: 'd-flex align-c justify-c',
            }
        };
        console.log('x', this._props)
        return this.compile(template, this._props);
    }

}

// const mapStateToProps = (state: State) => {
//     return { ...state.user };
// };
//
// const profilePage = connectStore(mapStateToProps)(ProfilePage)
// console.log(profilePage)
