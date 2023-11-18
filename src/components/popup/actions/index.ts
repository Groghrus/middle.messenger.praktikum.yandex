import Block from '../../../lib/Block.ts';
import template from './actions.tmpl.ts';

export default class Actions extends Block {
    render() {
        return this.compile(template, this._props)
    }
}
