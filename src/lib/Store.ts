import EventBus from './EventBus.ts';
import {isEqual, set} from './helpers.ts';
import Block from './Block.ts';
import { IUser } from "../api/auth-api.ts";
import { IChat } from '../api/chat-api.ts';
import { IMsgData } from '../controllers/MessagesController.ts';


export interface State {
    user?: IUser;
    chats?: IChat[];
    messages?: Record<number, IMsgData[]>;
    currentMessages?: IMsgData[];
    selectChat?: IChat[] | [];
    currentChatID?: number;

}
export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {
  private state: State = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);
    console.log('state', this.state);
    this.emit(StoreEvents.Updated, this.state);
  }
}

const store = new Store();

export const connectStore = (mapState: (state: State) => any) => {
   return (Component: typeof Block) => {
       return class extends Component {
           constructor(protected tagName: string, protected propsAndChilds: State) {
               let state = mapState(store.getState())
               super(tagName, {...propsAndChilds, ...mapState(store.getState())});

               store.on(StoreEvents.Updated, () => {
                  const stateProps = mapState(store.getState())
                   if (!isEqual(state, stateProps)) {
                       this.setProps({...stateProps})
                   }
                   state = stateProps
               })
           }
       }
   }
}



export default store;
