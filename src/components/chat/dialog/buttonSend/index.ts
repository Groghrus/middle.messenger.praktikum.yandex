import Block from '../../../../lib/Block.ts';
import template from './buttonSend.tmpl.ts';

export default class ButtonSend extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
