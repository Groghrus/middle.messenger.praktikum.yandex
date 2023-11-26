import Block from "../lib/Block.ts";
import router from "../lib/Router.ts";

export const connectRouter = (Component: typeof Block<any>) => {
  type Props = typeof Component extends typeof Block<infer P extends Record<string, any>> ? P : any;

  return class extends Component {
    constructor(props: Props & PropsWithRouter) {
      super('div',{ ...props,  router});
    }
  }
}

export interface PropsWithRouter {
  router: typeof router;
}
