/* eslint-disable */
import template from './chat.tmpl.ts';
import Block from '../../lib/Block.ts';
import Panel from '../../components/chat/panel';
import InputSearch from '../../components/inputSearch';
import LinkProfile from '../../components/profile/link';
import Card from '../../components/card';
import Dialog from '../../components/chat/dialog';
import DialogHeader from '../../components/chat/dialog/dialogHeader';
import DialogFooter from '../../components/chat/dialog/dialogFooter';
import Input from '../../components/input';
import MsgCard, {IMsgCardProps} from '../../components/card/msgCard';
import ButtonSend from '../../components/chat/dialog/buttonSend';
import {formValidation, inputValidation} from '../../utils/validation.ts';
import router from "../../lib/Router.ts";
import Button from '../../components/button';
import Modal from '../../components/modal';
import {connectStore, State} from '../../lib/Store.ts';
import ChatController from '../../controllers/ChatController.ts';
import {IChat} from '../../api/chat-api.ts';
import {API_URL} from '../../utils/HTTPtransporter.ts';
import ButtonPopUp from '../../components/chat/dialog/buttonPopup';
import PopUpFiles from '../../components/popup/files';
import AddButton from '../../components/popup/addBtn';
import DelButton from '../../components/popup/delBtn';
import InputFile from '../../components/profile/avatar/input';
import { getDateToTime} from '../../lib/helpers.ts';
import {MessagesController} from '../../controllers/MessagesController.ts';
import Plug from '../../components/chat/plag';

class ChatPage extends Block {

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
                  class: 'link-info d-flex align-c justify-end',
                },
                events: {
                  click: () => {
                      router.go('/profile')
                  },
                },
              },
            ),
            inputSearch: new InputSearch(
              'div',
              {
                inputPlHolder: 'Поиск',
                inputType: 'search',
                inputName: 'search',
                attr: {
                  class: 'search',
                },
              },
            ),
            attr: {
              class: 'top',
            },
          },
        ),
        attr: {
          class: 'container',
        }
      },
    );
  }

  init() {
      console.log('init chat', this)
      // pop up && modals
      this._children.createChatButton = new Button('div', {
          title: 'Добавить чат',
          className: 'btn btn-second text-white',
          attr: {
              class: 'btn-wrapper',
          },
          events: {
              click: () => {
                  const modal = this._children.modalCreateChat as Block
                  modal.show()
              }
          }
      });
      this._children.modalCreateChat = new Modal('div',{
          modalTitle: 'Добавить чат',
          colorText: 'text-dark',
          mLink: false,
          mAlert: false,
          inputs: new Input('div', {
                  inputLabel: 'Чат',
                  inputName: 'Чат',
                  inputType: 'text',
                  attr: {
                      class: 'input-wrapper input-text text-10-400 text-grey',
                  },
          }),
          button: new Button(
              'div',
              {
                  title: 'Добавить',
                  className: 'btn btn-second text-white',
                  attr: {
                      class: 'btn-wrapper d-flex justify-c',
                  },
                  events: {
                      click: () => {
                          const modal = this._children.modalCreateChat as Block
                          let value = (modal._children.inputs as Input)._element.firstElementChild.value
                          ChatController.create(value)
                          modal.hide()
                      }
                  }
              },
          ),
          attr: {
              class: 'overlay',
          },
      });
      this._children.modalAddUser = new Modal('div',{
          modalTitle: 'Добавить пользователя',
          colorText: 'text-dark',
          mLink: false,
          mAlert: false,
          inputs: new Input('div', {
                  inputLabel: 'ID пользователя',
                  inputName: 'login',
                  inputType: 'text',
                  attr: {
                      class: 'input-wrapper input-text text-10-400 text-grey',
                  },
          }),
          button: new Button(
              'div',
              {
                  title: 'Добавить',
                  className: 'btn btn-second text-white',
                  attr: {
                      class: 'btn-wrapper d-flex justify-c',
                  },
                  events: {
                      click: () => {
                          const modal = this._children.modalAddUser as Block
                          let value = (modal._children.inputs as Input)._element.firstElementChild.value
                          const userId = Number(value)
                          const chatId = ChatController.currentChat?.id
                          console.log(chatId, userId)
                          ChatController.addUserToChat(chatId, [userId])
                          modal.hide()
                      }
                  }
              },
          ),
          attr: {
              class: 'overlay',
          },
      });
      this._children.modalDelUser = new Modal('div',{
          modalTitle: 'Удалить пользователя',
          colorText: 'text-dark',
          mLink: false,
          mAlert: false,
          inputs: new Input('div', {
              inputLabel: 'ID пользователя',
              inputName: 'id',
              inputType: 'text',
              attr: {
                  class: 'input-wrapper input-text text-10-400 text-grey',
              },
          }),
          button: new Button(
              'div',
              {
                  title: 'Удалить',
                  className: 'btn btn-second text-white',
                  attr: {
                      class: 'btn-wrapper d-flex justify-c',
                  },
                  events: {
                      click: () => {
                          const modal = this._children.modalAddUser as Block
                          let value = (modal._children.inputs as Input)._element.firstElementChild.value
                          const userId = Number(value)
                          const chatId = ChatController.currentChat?.id
                          ChatController.deleteUserFromChat(chatId, [userId])
                          modal.hide()
                      }
                  }
              },
          ),
          attr: {
              class: 'overlay',
          },
      });
      this._children.modalAddAvatarToChat = new Modal('div',{
          modalTitle: 'Аватар чата',
          colorText: 'text-dark',
          mLink: true,
          mAlert: false,
          inputs: new InputFile('div', {
              inputType: 'file',
              inputLabel: '',
              inputName: 'avatar',
              attr: {
                  class: 'popup-file'
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
                      console.log(avatar)
                      const formData = new FormData();
                      formData.append('avatar', avatar);
                      console.log(formData)
                  }
              }
          }),
          button: new Button(
              'div',
              {
                  title: 'Добавить',
                  className: 'btn btn-second text-white',
                  attr: {
                      class: 'btn-wrapper d-flex justify-c',
                  },
                  events: {
                      click: () => {
                          const chatId = ChatController.currentChat?.id
                          console.log(chatId)

                          const modal = this._children.modalAddAvatarToChat as Block
                          let value = (modal._children.inputs as InputFile)
                              ._element.firstElementChild
                              .children[0]
                              .files[0]
                          console.log(value)
                          const formData = new FormData();
                          formData.append('avatar', value);
                          formData.append('chatId', chatId?.toString() || '');
                          ChatController.editChatAvatar(formData);
                          modal.hide()
                      },

                  }
              },
          ),
          attr: {
              class: 'overlay',
          },
      });
      this._children.popUpMenu = new PopUpFiles('div',
          {
              addChatAvatar: new AddButton('div', {
                  title: 'Добавить аватар чата',
                  events: {
                      click: ()=> {
                          const modal = this._children.modalAddAvatarToChat as Block
                          modal.show()
                      }
                  }
              }),
              addUser: new AddButton('div', {
                  title: 'Добавить пользователя',
                  events: {
                      click: ()=> {
                          const modal = this._children.modalAddUser as Block
                          modal.show()
                      }
                  }
              }),
              delUser: new DelButton('div', {
                  title: 'Удалить пользователя',
                  events: {
                      click: (e)=> {
                          console.log(e)
                          const modal = this._children.modalDelUser as Block
                          modal.show()
                      }
                  }
              }),
              delChat:new DelButton('div', {
                  title: 'Удалить чат',
                  events: {
                      click: ()=> {
                          const popup = this._children.popUpMenu as Block
                          popup.hide()
                          const chatId = ChatController.currentChat?.id
                          ChatController.deleteChat(chatId)
                      }
                  }
              }),
              attr: {
                  class: 'popup popup-menu'
              }
          });

      // chat components
      this._children.dialogHeader = new DialogHeader(
          'div',
          {
              userName: '',
              buttonMenu: new ButtonPopUp('div', {
                  attr: {
                      class: 'btn-menu'
                  },
                  events: {
                      click: () => {
                          const modal = this._children.popUpMenu as Block
                          modal.isVisible ? modal.hide() : modal.show()
                      }
                  }
              }),
              attr: {
                  class: 'dialog-header',
              },
          },
      );
      this._children.dialog = new Dialog(
          'div',
          {
              date: '',
              attr: {
                  class: 'dialog-main',
              },
          },
      );
      this._children.dialogFooter = new DialogFooter(
          'form',
          {
              inputMsg: new Input(
                  'div',
                  {
                      inputPlHolder: 'Сообщение',
                      inputType: 'text',
                      inputName: 'message',
                      events: {
                          blur: inputValidation
                      },
                      attr: {
                          class: 'input-wrapper input-text input-msg text-10-400 text-grey',
                      },
                  },
              ),
              attr: {
                  id: 'msg-form',
                  class: 'dialog-footer',
              },
          },
      );
      this._children.plug = new Plug('div', {
          showPlug: true
      });
  }
  componentDidMount() {
      ChatController.getChatList();
  }

  componentDidUpdate() {
        this._children.chatList = [];
        this._children.messagesListAll = [];
        this._children.chatList = this._props.chats?.map((chat: IChat) => {
            return new Card(
                'div',
                {
                    id: chat.id,
                    avatar: `${API_URL}/resources` + chat.avatar,
                    title: chat.title,
                    last_message: chat.last_message?.content,
                    lastMsgTime: getDateToTime(chat.last_message?.time),
                    unread_count: chat.unread_count,
                    attr: {
                        class: 'card'
                    },
                    events: {
                        click: () => {
                            ChatController.selectChat(chat.id);
                            (this._children.dialogHeader as DialogHeader).setProps({
                                headerShow: true,
                                userName: chat.title,
                                avatar: `${API_URL}/resources` + chat.avatar
                            });
                            (this._children.dialogFooter as DialogFooter).setProps({
                                footerShow: true
                            });
                            (this._children.plug as Plug).setProps({
                                showPlug: false
                            })
                        }
                    }
                },
            )
        });
        this._children.messagesListAll = this._props.messages.map((msg: IMsgCardProps) => {
              if (msg?.user_id === this._props.userId) {
                  return new MsgCard('div', {
                      content: msg?.content,
                      time: getDateToTime(msg?.time),
                      attr: {
                          class: 'msg-row msg-row__user',
                      },
                  })
              } else {
                  return new MsgCard('div', {
                      content: msg?.content,
                      time: getDateToTime(msg?.time),
                      attr: {
                          class: 'msg-row msg-row__contact',
                      },
                  })
              }


          });
        (this._children.dialogFooter as DialogFooter).setProps({
            buttonSend: new ButtonSend('div', {
                events: {
                    click: (e: any) => {
                        if (formValidation(e)) {
                            const parent = this._children.dialogFooter as Block
                            const chatId = ChatController.currentChat?.id
                            let valueMsg: string = (parent._children.inputMsg as Input)._element.firstElementChild
                            // @ts-ignore
                            MessagesController.sendMessage(chatId, valueMsg.value)
                            // @ts-ignore
                            valueMsg['value'] = '';
                        }
                    },
                },
                attr: {
                    class: 'd-flex justify-c',
                },
            }),
        });

      return true
  }

  render() {
      return this.compile(template, {});
    }
}

const mapStateToProps = (state: State) => {
    const selectChatId = state?.currentChatID;
    if (!selectChatId) {
        return {
            messages: [],
            chats: state.chats,
            currentChatID: undefined,
            userId: state.user?.id,
        }
    }
    return {
        user: state.user,
        chats: state.chats,
        selectChat: state?.selectChat,
        messages: (state.messages || {})[selectChatId] || [],
        userId: state.user?.id,
        currentChatID: state?.currentChatID
    };
};

export default connectStore(mapStateToProps)(ChatPage)
