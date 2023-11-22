import Block from '../../lib/Block.ts';
import template from './card.tmpl.ts';
interface ICardProps {
  userName?: string;
  userMsg?: string;
  lastMsgTime?: string;
  msgCount?: string;
}
export default class Card extends Block {
  constructor(tagName: string, _props: ICardProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
