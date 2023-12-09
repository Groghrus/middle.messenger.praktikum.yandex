import Block from '../../../lib/Block.ts';
import template from './plug.tmpl.ts';
interface IPlug {
    showPlug: boolean;
}
export default class Plug extends Block {
  constructor(tagName: string, _props: IPlug) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
