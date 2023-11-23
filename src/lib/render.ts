import Block from './Block.ts';

export const renderDOM = (query: string, block: Block) => {
    const root = document.querySelector(query);
    const component = block.getContent()

    if (root === null) {
        throw new Error(`root not found by selector "${query}"`);
    }

    if (root) {
        root.append(component!);
        component.dispatchComponentDidMount();
    }
    // if (root != null && component != null) {
    //     root.append(component!);
    //     block.dispatchComponentDidMount();
    // }
    // return root
}
