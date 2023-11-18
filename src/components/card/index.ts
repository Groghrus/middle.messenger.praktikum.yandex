import Block from '../../lib/Block.ts';
import template from './card.tmpl.ts';

export default class Card extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
