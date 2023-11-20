import template from './input.tmpl.ts';
import Block from '../../lib/Block.ts';
interface IInputProps {
  inputLabel?: string;
  inputName: string;
  inputType: string;
  inputPlHolder?: string;
  events?: object;
  attr?: {class: string;};
}
export default class Input extends Block {
  constructor(tagName: string, _props: IInputProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
