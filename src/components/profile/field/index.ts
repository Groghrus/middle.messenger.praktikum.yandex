import Block from '../../../lib/Block.ts';
import template from './fieldProfile.tmpl.ts';
interface ITextFieldProps {
  title: string;
  field: string;
  attr?: {
    class: string;
  };
  events?: object;
}
export default class TextField extends Block {
  constructor(tagName: string, _props: ITextFieldProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }

}

