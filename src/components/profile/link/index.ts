import template from './linkProfile.tmpl.ts';
import Block from '../../../lib/Block.ts';

export default class LinkProfile extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
