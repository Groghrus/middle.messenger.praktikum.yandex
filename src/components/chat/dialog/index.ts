import Block from '../../../lib/Block.ts';
import template from './dialog.tmpl.ts';

export default class Dialog extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
