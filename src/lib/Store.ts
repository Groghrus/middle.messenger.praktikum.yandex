import EventBus from './EventBus.ts';
import { set } from './helpers.ts';
import Block from './Block.ts';
import { IUser } from "../api/auth-api.ts";

export interface State {
    user?: IUser
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

export const connectStore =(mapState: (state: State) => any) => {
   return (Component: typeof Block) => {
       return class extends Component {
           constructor(props: any) {
               super('div', {...props, ...mapState(store.getState())});

               store.on(StoreEvents.Updated, () => {
                  const stateProps = mapState(store.getState())
                  this.setProps(stateProps)
               })
           }
       }
   }
}

export default store;
