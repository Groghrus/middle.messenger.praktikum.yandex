import Block from '../../../lib/Block.ts';
import template from './inputProfile.tmpl.ts';
interface IInputProfileProps {
  inputLabel?: string;
  inputName: string;
  inputType: string;
  inputValue?: string;
  inputPlHolder?: string;
  events?: object;
  attr?: {
    class: string;
  };
}
export default class InputProfile extends Block {
  constructor(tagName: string, _props: IInputProfileProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
