import Block from '../../../lib/Block.ts';
import template from './dialog.tmpl.ts';

interface IDialogProps {
  date: String,
  messages?: Array<any>,
  attr?: {
    class: string;
  };
}
export default class Dialog extends Block {
  constructor(tagName: string, _props: IDialogProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
