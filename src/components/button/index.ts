import template from './button.tmpl.ts';
import Block from '../../lib/Block.ts';

export default class Button extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
