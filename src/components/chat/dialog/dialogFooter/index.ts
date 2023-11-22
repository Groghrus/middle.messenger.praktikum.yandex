import Block from '../../../../lib/Block.ts';
import template from './dialogFooter.tmpl.ts';

export default class DialogFooter extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
