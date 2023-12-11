import template from './button.tmpl.ts';
import Block from '../../../../lib/Block.ts';

interface IBtnPopUpProps {
  type?: string;
  attr?: {
    class: string;
  };
  events?: {
      click?: (e: Event) => void
  };
}
export default class ButtonPopUp extends Block {
  constructor(tagName: string, _props: IBtnPopUpProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
