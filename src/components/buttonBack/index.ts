import Block from '../../lib/Block.ts';
import template from './buttonBack.tmpl.ts';

export default class ButtonBack extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
