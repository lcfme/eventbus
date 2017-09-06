class EventBus {
  constructor(_this) {
    this._this = _this
    this._listener = []
  }
  emit(eventName, ...args) {
    try {
      this._listener.forEach((item) => {
        item[eventName].call(this._this, ...args)
      })
    } catch (e) {}
  }
  on(eventName, callback) {
    var _env = {}
    _env[eventName] = callback
    this._listener.push(_env)
  }
}
