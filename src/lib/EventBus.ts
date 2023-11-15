export default class EventBus {
    private readonly listeners: {};
    constructor() {
        this.listeners = {}
    }

    public on(event: string, callback: any) {
         // @ts-ignore
        if(!this.listeners[event]) {
             // @ts-ignore
            this.listeners[event] = []
         }
        // @ts-ignore
        this.listeners[event].push(callback)
    }

    public off(event: string, callback: any) {
        // @ts-ignore
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        // @ts-ignore
        this.listeners[event] = this.listeners[event].filter(
            (listener: () => void) => listener !== callback
        );
    }

    public emit(event, ...args) {
        // @ts-ignore
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
        // @ts-ignore
        this.listeners[event].forEach(listener => {
            listener(...args)
        })
    }
}
