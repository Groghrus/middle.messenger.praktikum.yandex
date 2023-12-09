import Block from '../../../lib/Block.ts';
import template from './msgCard.tmpl.ts';

export interface IMsgCardProps {
  user_id?: number;
  content?: string;
  time?: string;
  attr?: {
    class: string;
  };
}
export default class MsgCard extends Block {
  constructor(tagName: string, _props: IMsgCardProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
