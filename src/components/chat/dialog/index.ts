import Block from '../../../lib/Block.ts';
import template from './dialog.tmpl.ts';

interface IDialogProps {
  date?: String,
  messagesList?: Array<object> | Block,
  selectedChat?: number;
  attr?: {
    class: string;
  };
}
export default class Dialog extends Block {
  constructor(tagName: string, _props: IDialogProps) {
    super(tagName, _props);
  }

  render() {
    this._props = {
      attr: {
        class: 'dialog-main',
      },
    };
    return this.compile(template, this._props);
  }
}
