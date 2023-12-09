import Block from '../../../../lib/Block.ts';
import template from './dialogHeader.tmpl.ts';
interface IDialogHeaderProps {
  userName?: string;
  headerShow?: boolean;
  buttonMenu?: Block;
  attr?: {
    class: string;
  };
}
export default class DialogHeader extends Block {
  constructor(tagName: string, _props: IDialogHeaderProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
