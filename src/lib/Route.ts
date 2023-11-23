import Block from './Block.ts';
import { renderDOM } from './render.ts';
const isEqual = (lhs: string, rhs: string): boolean => {
    return lhs === rhs;
}
export class Route {
    _block: Block | null;
    _pathname: string;
    _props: Block['_props'];
    readonly _blockClass: typeof Block;

    constructor(pathname: string, view: typeof Block, props: Block['_props']) {
        this._pathname = pathname;
        this._block = null;
        this._blockClass = view;
        this._props = props;
    }
    navigate(pathname: string): void {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    };
    leave(): void {
        if (this._block) {
            this._clearRoot();
        }
    };
    match(pathname: string): boolean {
        return isEqual(pathname, this._pathname);
    }
    render(): void {
        if (!this._block) {
            this._block = new this._blockClass('', this._props);
            renderDOM(this._props.rootQuery, this._block as Block);
            return;
        }
    }
    _clearRoot(): void {
        if (this._block != null) {
            this._block.removeEvents();
            this._block = null;
            const root = document.querySelector(this._props.rootQuery);
            if (root != null) {
                root.innerHTML = '';
            }
        }
    }

}
