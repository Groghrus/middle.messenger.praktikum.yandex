import Block from '../../lib/Block.ts';
import template from './modal.tmpl.ts';

export default class Modal extends Block {
    render() {
        return this.compile(template, this._props)
    }
}
