import template from './addButton.tmpl.ts';
import Block from '../../../lib/Block.ts';

interface IAddBtnProps {
  title?: string;
  attr?: {
    class: string;
  };
  events?: {
      click?: (e: Event) => void
  };
}
export default class AddButton extends Block {
  constructor(tagName: string, _props: IAddBtnProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
