import template from './button.tmpl.ts'
import Block from '../../lib/Block.ts';

// interface BtnProps {
//     classNames?: string;
//     type?: 'button' | 'reset' | 'submit';
//     title: string;
//     events?: {
//         click?: (...args: any) => void;
//     };
// }

export default class Button extends Block {
    // constructor(props: BtnProps) {
    //     super({...props, type: props.type || 'button'});
    // }
    render() {
        return this.compile(template, this._props)
    }

    // addEvents() {
    //     super.addEvents();
    //
    //     this._element.querySelectorAll('button').forEach( (btn: any) => {
    //         btn.addEventListener('click', (e: any) => {
    //             e.preventDefault()
    //             e.stopPropagation()
    //             console.log('Link click', btn)
    //         })
    //         // btn.addEventListener('click', this._props.events.click)
    //     })
    // }
}
