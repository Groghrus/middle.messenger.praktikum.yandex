import { Route } from './Route.ts';
import Block from './Block.ts';

export enum Routes {
    Auth = '/',
    Signin = '/sign-up',
    Chat = '/messenger',
    Profile = '/profile',
    ProfileEdit = '/settings',
    ProfilePwdEdit = '/password-edit',
    Err404 = '/err404',
    Err500 = '/err500',
    Modals = '/modals'
}

class Router {
    _history: History | undefined;
    _routes: Route[] = [];
    static _instance: Router;
    _currentRoute: Route | null = null;
    _rootQuery: string = '';

    constructor(rootQuery: string) {
        if (Router._instance) {
            return Router._instance;
        }
        this._routes = [];
        this._history = window.history;
        this._currentRoute = null
        this._rootQuery = rootQuery;
        Router._instance = this;
    }

    use(pathname: string, block: typeof Block) {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery});
        this._routes.push(route);
        return this;
    }
    start() {
        window.onpopstate = (event: PopStateEvent) => {
            const currentTarget = event.currentTarget as Window;
            this._onRoute(currentTarget.location.pathname);
        };
        this._onRoute(window.location.pathname);
    }
    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if(this._currentRoute) {
            this._currentRoute.leave();
        }
        this._currentRoute = route;
        route.render();
    }
    go(pathname: string) {
        this._history?.pushState({}, '', pathname)
    }
    back() {
        this._history?.back()
    }
    forward() {
        this._history?.forward()
    }
    getRoute(pathname: string): Route {
        return <Route>this._routes.find((route) => route.match(pathname))!;
    }
}
export default new Router('#app');


