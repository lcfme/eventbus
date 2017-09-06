(function(global, factory) {
  if (typeof module !== "undefined" && !!module.exports) {
    module.exports = factory(global);
  } else {
    factory(global, true);
  }
})(typeof window !== "undefined" ? window : this, function(global, noGlobal) {
  class EventBus {
    constructor(_this) {
      this._this = _this;
      this._listener = [];
    }
    emit(eventName, ...args) {
      try {
        this._listener.forEach(item => {
          item.eventName === eventName && item.fn.call(this._this, ...args);
        });
      } catch (e) {}
    }
    on(eventName, fn) {
      var _env = {
        eventName,
        fn
      };
      this._listener.push(_env);
    }
  }
  if (!!noGlobal) {
    global.EventBus = EventBus;
  }
  return EventBus;
});
