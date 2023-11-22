import Block from '../../lib/Block.ts';
import template from './main.tmpl.ts';

export default class MainLayout extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
