import template from './delButton.tmpl.ts';
import Block from '../../../lib/Block.ts';

interface IDelBtnProps {
  title?: string;
  attr?: {
    class: string;
  };
  events?: {
      click?: (e: Event) => void
  };
}
export default class DelButton extends Block {
  constructor(tagName: string, _props: IDelBtnProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
