import template from './inputSearch.tmpl.ts';
import Block from '../../lib/Block.ts';

export default class InputSearch extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
