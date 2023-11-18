import Block from '../../../lib/Block.ts';
import template from './avatarProfile.tmpl.ts';

export default class AvatarProfile extends Block {
    render() {
        return this.compile(template, this._props)
    }
}
