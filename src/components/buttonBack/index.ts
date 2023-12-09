import Block from '../../lib/Block.ts';
import template from './buttonBack.tmpl.ts';
interface IBtnBackProps {
  attr?: {
    class: string;
  };
  events?: object;
}
export default class ButtonBack extends Block {
  constructor(tagName: string, _props: IBtnBackProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
