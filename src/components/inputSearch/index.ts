import template from './inputSearch.tmpl.ts';
import Block from '../../lib/Block.ts';
interface IInputSearchProps {
  inputName: string;
  inputType: string;
  inputPlHolder?: string;
  events?: object;
  attr?: {
    class: string;
  };
}

export default class InputSearch extends Block {
  constructor(tagName: string, _props: IInputSearchProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
