import { v4 as makeUUID } from 'uuid';
import Handlebars from 'handlebars';
import EventBus from './EventBus.ts';

type meta = {
  tagName: string
  props: props
};

type props = {
  props?: Record<symbol | string, unknown>
  attr?: Record<symbol | string, unknown>
  events?: Record<symbol | string, (events: Event) => void>
};

export default class Block<Props extends Record<string, any> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  _props: Props;

  _children: Record<string, Block[] | Block>;

  _id: string;

  _element: any;

  _lists: object;

  _meta: meta | null = null;

    _eventBus: EventBus;

  _setUpdate: boolean = false;
  _visible: boolean = false;

  constructor(tagName: string = '', propsAndChilds: Props) {
    const { children, props, lists } = this.getChildren(propsAndChilds);

    this._eventBus = new EventBus();
    this._id = makeUUID();
    this._children = this.makePropsProxy(children);
    this._lists = this.makePropsProxy(lists);
    this._props = this.makePropsProxy({ ...props, __id: this._id });
    this._meta = { tagName, props };

    this.registerEvents();
    this._eventBus.emit(Block.EVENTS.INIT);
  }

  registerEvents() {
    this._eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    this._eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this._eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    this._eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta as meta
    this._element = this._createDocumentElement(tagName);
  }

  _init() {
    this._createResources()
    this.init()
    this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  init() {}

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  _render() {
    const block = this.render();
    this.removeEvents();
    this._element.innerHTML = '';
    this._element.appendChild(block)
    ;
    this.addEvents();
    this.addAttribute();
  }

    render(): DocumentFragment {
        return new DocumentFragment();
    }

  addEvents() {
    const { events = {} } = this._props;

    Object.keys(events).forEach((eventName) => {

      if (eventName === 'blur') {
        const inputs = this.getContent().querySelectorAll('input')
        inputs.forEach((input: any) => input.addEventListener(eventName, events[eventName]))
        return
      }

      this.getContent().addEventListener(eventName, events[eventName]);
    });
  }

  removeEvents() {
    const { events = {} } = this._props;

    Object.keys(events).forEach((eventName) => {

      if (eventName === 'blur') {
        const inputs = this.getContent().querySelectorAll('input')
        inputs.forEach((input: any) => input.removeEventListener(eventName, events[eventName]))
        return
      }

      this.getContent().removeEventListener(eventName, events[eventName]);
    });
  }

  set className (name:string) {
      this.addAttribute(name)
  }
  addClass(name: string) {
      this.getContent()!.classList.add(name);
  }

  addAttribute(className?: string) {
    const { attr = {} } = this._props;
      if (attr === 'class'){
          this.addClass(typeof className === 'string' ? className : '')
          return;
      }

    Object.entries(attr).forEach(([key, value]) => {
      this._element.setAttribute(key, value);
    });
  }

  getChildren(propsAndChilds: Props) {
    const children: any = {};
    const props: any = {};
    const lists: any = {};
    Object.keys(propsAndChilds).forEach((key: string) => {
      if (propsAndChilds[key] instanceof Block) {
        children[key] = propsAndChilds[key];
      }
      if (Array.isArray(propsAndChilds[key])) {
        lists[key] = propsAndChilds[key];
      } else {
        props[key] = propsAndChilds[key];
      }
    });
    return { children, props, lists };
  }

  compile(template: any, props: any) {
    if (typeof (props) === 'undefined') {
      props = this._props;
    }
    const propsAndStubs = { ...props };

    Object.entries(this._children).forEach(([key, child]) => {
        const componentsArray = Array.isArray(child)
            ? child
            : [child];
        propsAndStubs[key] = "";
        componentsArray.forEach((child) => {
            propsAndStubs[key] += `<div data-id="${child?._id}"></div>`;
        });

        // propsAndStubs[key] = `<div data-id ="${child._id}"></div>`;
    });

    Object.entries(this._lists).forEach(([key]) => {
      propsAndStubs[key] = `<div data-id ="__l_${key}"></div>`;
    });

    const fragment: any = this._createDocumentElement('template');
    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);


    Object.entries(this._children).forEach(([_, child]) => {
      const componentsArray = Array.isArray(child)
          ? child
          : [child];

      componentsArray.forEach((child, _) => {
          const stub = fragment.content.querySelector(`[data-id="${child?._id}"]`);

          if (!stub) return;

          child?.getContent()?.append(...Array.from(stub.childNodes));
          stub.replaceWith(child?.getContent()!);
      });
  });
    Object.entries(this._lists).forEach(([key, child]) => {
      const stub = fragment.content.querySelector(`[data-id="__l_${key}"]`);
      const listContent: any = this._createDocumentElement('template');
      child.forEach((item: any) => {
        if (item instanceof Block) {
          listContent.content.append(item.getContent());
        } else {
          listContent.content.append(`${item}`);
        }
      });
      if (stub) {
        stub.replaceWith(listContent.content);
      }
    });
    return fragment.content;
  }

  _componentDidMount() {
    this.componentDidMount();
    // Object.values(this._children).forEach((child) => { child?.dispatchComponentDidMount(); });
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this._eventBus.emit(Block.EVENTS.FLOW_CDM);
    // if (Object.keys(this._children).length) {
    //   this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
    // }
  }

  _componentDidUpdate(oldProps: any, newProps: any): void {
    const isReRender = this.componentDidUpdate(oldProps, newProps);
    if (isReRender) {
      this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(_oldProps: Props, _newProps: Props): boolean {
    return true;
  }

  getContent() {
    return this._element;
  }

  setProps(newProps: Props) {
    if (!newProps) {
      return;
    }
    this._setUpdate = false;
    const oldValue = { ...this._props };

    const { children, props, lists } = this.getChildren(newProps);

    Object.assign(this._props, newProps);

    if (Object.values(children).length) {
      Object.assign(this._children, children);
    }
    if (Object.values(props).length) {
      Object.assign(this._props, props);
    }
    if (Object.values(lists).length) {
      Object.assign(this._lists, lists);
    }
    this._eventBus.emit(Block.EVENTS.FLOW_CDU, oldValue, this._props);
  }

  makePropsProxy(props: Props) {
    return new Proxy(props, {
      get(target: any, prop: string | symbol) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target: any, prop: string | symbol, value) => {
        if (target[prop] !== value) {
          target[prop] = value;
          this._setUpdate = true;
        }
        return true;
      },
    });
  }

  get isVisible() {
      return this._visible
  }

  show() {
    this.getContent().style.display = 'block';
    this._visible = true
  }

  hide() {
    this.getContent().style.display = 'none';
      this._visible = false
  }
}

