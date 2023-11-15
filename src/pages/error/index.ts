import Block from '../../lib/Block.ts';
import template from './error.tmpl.ts';

export default class ErrorPage extends Block {
    render() {
        return this.compile(template, this._props)
    }
}
