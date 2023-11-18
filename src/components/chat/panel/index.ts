import Block from '../../../lib/Block.ts';
import template from './panel.tmpl.ts';

export default class Panel extends Block {
    render() {
        return this.compile(template, this._props)
    }
}
