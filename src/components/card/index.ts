import Block from '../../lib/Block.ts';
import template from './card.tmpl.ts';
interface ICardProps {
    id?: string | number;
    avatar?: string;
    title?: string;
    lastMsgTime?: string;
    last_message?: any;
    unread_count?: number;
    attr?: {},
    events?: {
        click?: (e: Event) => void
    };
}
export default class Card extends Block {
  constructor(tagName: string, _props: ICardProps) {
    super(tagName, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
