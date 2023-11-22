import Block from '../../../lib/Block.ts';
import template from './avatarProfile.tmpl.ts';
interface IAvatarProfileProps {
  text?: string;
  exit?: boolean;
  attr?: {
    class: string;
  };
  events?: object;
}
export default class AvatarProfile extends Block {
  constructor(tagName: string, _props: IAvatarProfileProps) {
    super(tagName, _props);
  }
  render() {
    return this.compile(template, this._props);
  }
}
