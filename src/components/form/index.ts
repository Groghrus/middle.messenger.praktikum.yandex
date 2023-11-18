import Block from '../../lib/Block.ts';
import template from '../../pages/auth/auth.tmpl.ts';

export class Form extends Block {
    render() {
        console.log('render form')
        return this.compile(template, {})
    }
}

