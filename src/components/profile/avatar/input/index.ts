import template from './input.tmpl.ts';
import Block from '../../../../lib/Block.ts';

interface IInputFProps {
  inputLabel?: string;
  inputName: string;
  inputType: string;
  inputPlHolder?: string;
  inputValue?: string;
  events?: {
      change?: (e: Event) => void
  };
  attr?: {
    class: string;
  };
}
export default class InputFile extends Block {
  constructor(tagName: string, _props: IInputFProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
