import Block from '../../../lib/Block.ts';
import template from './buttonProfile.tmpl.ts';
interface IButtonProfileProps {
  title: string;
  attr?: {
    class: string;
  };
  events?: object;
}
export default class ButtonProfile extends Block {
  constructor(tagName: string, _props: IButtonProfileProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
