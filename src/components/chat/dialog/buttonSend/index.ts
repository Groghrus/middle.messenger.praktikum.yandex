import Block from '../../../../lib/Block.ts';
import template from './buttonSend.tmpl.ts';

interface IButtonSend {
  attr?: {
    class: string;
  };
  events?: {
    submit?: (e: Event) => void
    click?: (e: Event) => void
    change?: (e: Event) => void
    keypress?: (e: Event) => void
    onsubmit?: (e: Event) => void
  };
}

export default class ButtonSend extends Block {
  constructor(tagName: string, _props: IButtonSend) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
