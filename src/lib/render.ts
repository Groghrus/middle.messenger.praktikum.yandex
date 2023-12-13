import Block from './Block.ts';

export const renderDOM = (query: string, block: Block | null) => {
    const root = document.querySelector(query);

    if (root === null) {
        throw new Error(`root not found by selector "${query}"`);
    }

    root.innerHTML = '';

    root.append(block?.getContent()!);

    // @ts-ignore
    block.dispatchComponentDidMount()

    return root;
}
