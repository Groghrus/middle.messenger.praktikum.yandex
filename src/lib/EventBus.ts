type event = string
type callback = (...args: unknown[]) => void
type listeners = { [key: string]: callback[] };

export default class EventBus {
    private readonly listeners: listeners = {};
    constructor() {
        this.listeners = {}
    }

    public on(event: event, callback: callback) {

        if(!this.listeners[event]) {

            this.listeners[event] = []
         }

        this.listeners[event].push(callback)
    }

    public off(event: event, callback: callback) {

        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }


        this.listeners[event] = this.listeners[event].filter(
            (listener: () => void) => listener !== callback
        );
    }

    public emit(event: event, ...args: unknown[]) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
        this.listeners[event].forEach(listener => {
            listener(...args)
        })
    }
}
