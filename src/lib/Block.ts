import { EventBus } from './EventBus.ts'

class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };
    _element = null;
    _meta = null;

    // @ts-ignore
    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    // @ts-ignore
    constructor(tagName: string = 'div', props: object = {}): void {
        const eventBus = new EventBus();

        // @ts-ignore
        this._meta = {
            tagName,
            props
        };

        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init() {
        this._createResources();
        this._render();
    }

    _componentDidMount() {
        // @ts-ignore
        this.componentDidMount();
    }

    componentDidMount() {}

    dispatchComponentDidMount() {
        this._eventBus().emit(Block.EVENTS.FLOW_CDM);
    }


    _componentDidUpdate(oldProps: any, newProps: any) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
        }
        const response = this.componentDidUpdate(oldProps, newProps);
    }
    // Может переопределять пользователь, необязательно трогать
    componentDidUpdate(oldProps, newProps) {
        return true;
    }
    setProps = (nextProps: any) => {
        if (!nextProps) {
            return;
        }
        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    _render() {
        const block = this.render();
        // Это небезопасный метод для упрощения логики
        // Используйте шаблонизатор из npm или напишите свой безопасный
        // Нужно компилировать не в строку (или делать это правильно),
        // либо сразу превращать в DOM-элементы и возвращать из compile DOM-ноду
        // @ts-ignore
        this._element.innerHTML = block;
    }

    // Переопределяется пользователем. Необходимо вернуть разметку
    render() {}

    getContent() {
        return this.element;
    }

    _makePropsProxy(props: object) {
        // Ещё один способ передачи this, но он больше не применяется с приходом ES6+
        const self = this;
        props = new Proxy(props, {
            get(target, prop) {
                // @ts-ignore
                const value = target[prop];
                console.log("get data: ", value);
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target, prop, value) {
                // @ts-ignore
                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, [self.props, target])
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа")
            }
        });
        return props;
    }

    _createDocumentElement(tagName: any) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }

    show() {
        // @ts-ignore
        this.getContent().style.display = "block";
    }

    hide() {
        // @ts-ignore
        this.getContent().style.display = "none";
    }
}

export default Block
