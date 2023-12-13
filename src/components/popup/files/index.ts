import Block from '../../../lib/Block.ts';
import template from './files.tmpl.ts';
interface IPopUpFilesProps {
    addChatAvatar?: Block;
    addUser?: Block;
    delUser?: Block;
    delChat?: Block;
    attr?: {
        class: string;
    };
    events?: {
        click?: (e: Event) => void
    };
}
export default class PopUpFiles extends Block {
  constructor(tagName: string, _props: IPopUpFilesProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
