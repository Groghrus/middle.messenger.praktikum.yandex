import Block from '../../../lib/Block.ts';
import template from './files.tmpl.ts';

export default class Files extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
