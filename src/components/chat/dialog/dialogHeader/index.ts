import Block from '../../../../lib/Block.ts';
import template from './dialogHeader.tmpl.ts';

export default class DialogHeader extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
