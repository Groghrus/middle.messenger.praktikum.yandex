import Block from './Block.ts';
import { renderDOM } from './render.ts';
const isEqual = (lhs: string, rhs: string): boolean => {
    return lhs === rhs;
}

export class Route {
    private block: Block | null = null;

    constructor(
        private pathname: string,
        private readonly blockClass: Block<any> | null,
        private readonly query: string) {}

    leave() {
        this.block = null;
    }

    match(pathname: string) {
        return isEqual(pathname, this.pathname);
    }

    render() {
        if (!this.block) {
            this.block = this.blockClass;
            renderDOM(this.query, this.block);
            return;
        }
    }
}
