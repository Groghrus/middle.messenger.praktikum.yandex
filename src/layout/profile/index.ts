import Block from '../../lib/Block.ts';
import template from './profileLayout.tmpl.ts';

export default class ProfileLayout extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
