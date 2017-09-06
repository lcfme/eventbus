class EventBus {
  constructor(_this) {
    this._this = _this
    this._listener = []
  }
  emit(eventName, ...args) {
    try {
      this._listener.forEach((item) => {
        if (item.eventName === eventName) {
          item.fn.call(this._this, ...args)
        }
      })
    } catch (e) {}
  }
  on(eventName, fn) {
    var _env = {
      eventName,
      fn,
    }
    this._listener.push(_env)
  }
}
