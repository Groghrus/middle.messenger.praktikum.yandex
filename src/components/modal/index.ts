import Block from '../../lib/Block.ts';
import template from './modal.tmpl.ts';
interface IModalProps {
  modalTitle?: string;
  titleFile?: string;
  colorText?: string;
  mLink?: boolean;
  mFile?: boolean;
  mAlert?: boolean;
  events?: object;
  button?: object;
  inputs?: object;
  attr?: {
    class: string;
  };
}
export default class Modal extends Block {
  constructor(tagName: string, _props: IModalProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
