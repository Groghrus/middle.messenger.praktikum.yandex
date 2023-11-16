import Block from '../../../lib/Block.ts';
import template from '../msgCard/msgCard.tmpl.ts';

export default class msgCard extends Block {
    render() {
        return this.compile(template, this._props)
    }
}
