import Block from '../../../lib/Block.ts';
import template from './msgCard.tmpl.ts';

interface IMsgCardProps {
  text: string;
  time?: string;
  attr?: {
    class: string;
  };
}
export default class msgCard extends Block {
  constructor(tagName: string, _props: IMsgCardProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
