import template from './input.tmpl.ts';
import Block from '../../lib/Block.ts';

export default class Input extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
