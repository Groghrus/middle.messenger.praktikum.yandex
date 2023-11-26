import { Route } from './Route.ts';
import Block from './Block.ts';

export enum Routes {
    Auth = '/',
    Register = '/sign-up',
    Chat = '/messenger',
    Profile = '/profile',
    ProfileEdit = '/settings',
    ProfilePwdEdit = '/password-edit',
    Err404 = '/err404',
    Err500 = '/err500',
    Modals = '/modals'
}

class Router {
    _history: History = window.history;
    _routes: Route[] = [];
    static _instance: Router;
    _currentRoute: Route | null = null;

    constructor(readonly rootQuery: string) {
        if (Router._instance) {
            return Router._instance;
        }
        this._routes = [];
        Router._instance = this;
    }

    use(pathname: string, block: Block<any> | null) {
        const route = new Route(pathname, block, this.rootQuery);
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
        if (!route) {
            return;
        }
        if(this._currentRoute && this._currentRoute !== route) {
            this._currentRoute.leave();
        }
        this._currentRoute = route;
        route.render();
    }
    go(pathname: string) {
        this._history.pushState({}, '', pathname)
        this._onRoute(pathname);
    }
    back() {
        this._history.back()
    }
    forward() {
        this._history.forward()
    }
    getRoute(pathname: string): Route {
        return <Route>this._routes.find((route) => route.match(pathname));
    }
}
export default new Router('#app');


