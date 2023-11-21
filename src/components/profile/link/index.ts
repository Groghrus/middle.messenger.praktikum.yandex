import template from './linkProfile.tmpl.ts';
import Block from '../../../lib/Block.ts';
interface ILinkProfileProps {
  title?: string;
  events?: object;
  attr?: {
    class: string;
  };
}
export default class LinkProfile extends Block {
  constructor(tagName: string, _props: ILinkProfileProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
