import Block from '../../../lib/Block.ts';
import template from './inputProfile.tmpl.ts';

export default class InputProfile extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
