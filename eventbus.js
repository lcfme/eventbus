class EventBus {
    constructor() {
        this._env = {}
    }
    emit(eventName, ...args) {
        try{
            this._env[eventName].call(null, ...args)
        } catch(e) {}
    }
    on(eventName, callback) {
        try{
            this._env[eventName] = callback
        } catch(e) {}
    }
}
