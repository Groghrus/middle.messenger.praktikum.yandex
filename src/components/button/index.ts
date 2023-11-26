import template from './button.tmpl.ts';
import Block from '../../lib/Block.ts';

interface IBtnProps {
  title?: string;
  type?: string;
  className?: string;
  attr?: {
    class: string;
  };
  events?: object;
}
export default class Button extends Block {
  constructor(tagName: string, _props: IBtnProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
