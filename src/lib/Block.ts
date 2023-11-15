import {v4 as makeUUID} from 'uuid';
import Handlebars from 'handlebars';
import EventBus from './EventBus.ts';

export default class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    } as const;

    _props
    _children: object
    _id: string
    _element: any
    _lists
    _meta
    _eventBus
    _setUpdate: boolean = false
    constructor(tagName: string = 'div', propsAndChilds: object = {}) {

        const { children, props, lists } = this.getChildren(propsAndChilds)

        this._eventBus = new EventBus()
        this._id = makeUUID()
        this._children = this.makePropsProxy(children)
        this._lists = this.makePropsProxy(lists)
        this._props = this.makePropsProxy({...props, __id: this._id })
        this._meta = { tagName, props }

        this.registerEvents();
        this._eventBus.emit(Block.EVENTS.INIT);
    }
    registerEvents() {
        this._eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
        this._eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
        this._eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
        this._eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
    }

    init() {
        this._element = this.createDocumentElement(this._meta?.tagName)
        this._eventBus.emit(Block.EVENTS.FLOW_RENDER)
    }
    createDocumentElement(tagName: string): HTMLElement {
        return document.createElement(tagName)
    }

    _render() {
        const block = this.render()
        this.removeEvents()
        this._element.innerHTML = ''
        this._element.appendChild(block)
        this.addEvents()
        this.addAttribute()
    }
    render() {}

    addEvents () {
        const { events = {} } = this._props

        Object.keys(events).forEach(eventName => {
            this._element.addEventListener(eventName, events[eventName])
        })
    }
    removeEvents () {
        const { events = {} } = this._props

        Object.keys(events).forEach((eventName) => {
            this._element.removeEventListener(eventName, events[eventName])
        })
    }

    addAttribute () {
        const { attr = {} } = this._props

        Object.entries(attr).forEach(([key, value]) => {
            this._element.setAttribute(key, value)
        })
    }

    getChildren(propsAndChilds) {

        const children = {}
        const props= {}
        const lists= {}

        Object.keys(propsAndChilds).forEach((key) =>{
            if (propsAndChilds[key] instanceof  Block) {
                children[key] = propsAndChilds[key]
            }
            if (Array.isArray(propsAndChilds[key])) {
                lists[key] = propsAndChilds[key]
            } else {
                props[key] = propsAndChilds[key]
            }
        })
        return { children, props, lists }
    }
    compile(template: any, props: any) {
        if (typeof (props) === 'undefined') {
            props = this._props
        }
        const propsAndStubs = {...props}

        Object.entries(this._children).forEach(([key, child]) => {
            propsAndStubs[key] = `<div data-id ="${child._id}"></div>`
        })

        Object.entries(this._lists).forEach(([key, child]) => {
            propsAndStubs[key] = `<div data-id ="__l_${key}"></div>`
        })

        const fragment = this.createDocumentElement('template')
        fragment.innerHTML = Handlebars.compile(template)(propsAndStubs)

        Object.values(this._children).forEach(child => {
            const stub = fragment.content.querySelector(`[data-id="${child._id}"]`)
            if(stub) {
                stub.replaceWith(child.getContent())
            }
        })
        Object.entries(this._lists).forEach(([key, child]) => {
            const stub = fragment.content.querySelector(`[data-id="__l_${key}"]`)
            const listContent = this.createDocumentElement('template')
            child.forEach((item) => {
                if (item instanceof Block) {
                    listContent.content.append(item.getContent())
                } else {
                    listContent.content.append(`${item}`)
                }
            })
            if(stub) {
                stub.replaceWith(listContent.content)
            }

        })
        return fragment.content
    }
    _componentDidMount() {
        this.componentDidMount()
        Object.values(this._children).forEach(child => {child.dispatchComponentDidMount()})
    }
    componentDidMount() {}

    dispatchComponentDidMount() {
        this._eventBus.emit(Block.EVENTS.FLOW_CDM);
        if (Object.keys(this._children).length) {
            this._eventBus.emit(Block.EVENTS.FLOW_RENDER)
        }
    }

    _componentDidUpdate(oldProps, newProps) {
        const isReRender = this.componentDidUpdate(oldProps, newProps)
        if(isReRender) {
            this._eventBus.emit(Block.EVENTS.FLOW_RENDER)
        }
    }
    componentDidUpdate(oldProps, newProps) {
        console.log(oldProps, newProps)
        return true
    }

    /*setProps (newProps) {
        if (!newProps) {
            return
        }

        const {children, props, lists} = this.getChildren(newProps)

        if (Object.values(children).length) {
            Object.assign(this._children, children)
        }
        if (Object.values(children).length) {
            Object.assign(this._lists, children)
        }
        if (Object.values(props).length) {
            Object.assign(this._props, props)
        }
    }

    makePropsProxy(props) {
        const self = this;
        return new Proxy(props, {
            get(target, prop) {
              const value = target[prop]
                return typeof value === "function" ? value.bind(target) : value
            },
            set(target, prop, value) {
                const oldValue = {...target}
                target[prop] = value;
                self._eventBus.emit(Block.EVENTS.FLOW_CDU, oldValue, target)
                return true
            }
        })
    }*/

    getContent() {
        return this._element;
    }


    // new setProps && makeProps
    setProps(newProps) {
        if (!newProps) {
            return
        }
        this._setUpdate = false
        const oldValue = { ...this._props }

        const {children, props, lists} = this.getChildren(newProps)

        if (Object.values(children).length) {
            Object.assign(this._children, children)
        }
        if (Object.values(lists).length) {
            Object.assign(this._lists, lists)
        }
        if (Object.values(props).length) {
            Object.assign(this._props, props)
        }
        if (this._setUpdate) {
            this._eventBus.emit(Block.EVENTS.FLOW_CDU, oldValue, this._props)
            this._setUpdate = false
        }
    }

    makePropsProxy(props: object) {
        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop]
                return typeof value === "function" ? value.bind(target) : value
            },
            set: (target, prop, value) => {
                if (target[prop] !== value) {
                    target[prop] = value
                    this._setUpdate = true
                }
                return true
            }
        })
    }

    show() {
        this.getContent().style.display = "block";
    }

    hide() {
        this.getContent().style.display = "none";
    }

}
