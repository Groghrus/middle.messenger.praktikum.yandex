import Block from '../../lib/Block.ts';
import template from './buttonClose.tmpl.ts';
interface IBtnCloseProps {
  attr?: {
    class: string;
  };
  events?: object;
}
export default class ButtonClose extends Block {
  constructor(tagName: string, _props: IBtnCloseProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
