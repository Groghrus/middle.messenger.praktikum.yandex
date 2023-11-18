import Block from '../../../lib/Block.ts';
import template from './fieldProfile.tmpl.ts';

export default class TextField extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
