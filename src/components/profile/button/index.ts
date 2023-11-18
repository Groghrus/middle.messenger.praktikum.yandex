import Block from '../../../lib/Block.ts';
import template from './buttonProfile.tmpl.ts';

export default class ButtonProfile extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
