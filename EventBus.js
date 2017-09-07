(function(global, factory) {
  if (typeof module !== "undefined" && !!module.exports) {
    module.exports = factory(global);
  } else {
    factory(global, true);
  }
})(typeof window !== "undefined" ? window : this, function(global, noGlobal) {
  class EventBus {
    constructor(_this) {
      this._this = _this || null;
      this._listener = [];
    }
    emit(eventName, ...args) {
      try {
        this._listener.forEach(item => {
          item.eventName === eventName && item.fn.call(this._this, ...args);
        });
      } catch (e) {}
      return this;
    }
    on(eventName, fn) {
      var _env = {
        eventName,
        fn
      };
      this._listener.push(_env);
      return this;
    }
  }
  if (!!noGlobal) {
    global["EventBus"] = EventBus;
  }
  (function(EventBus) {
    EventBus.prototype.success = function(eventName, ...args) {
      var _evtName = eventName + "/success";
      this.emit(_evtName, ...args);
      return this;
    };
    EventBus.prototype.fail = function(eventName, ...args) {
      var _evtName = eventName + "/fail";
      this.emit(_evtName, ...args);
      return this;
    };
    EventBus.prototype.onsuccess = function(eventName, fn) {
      var _evtName = eventName + "/success";
      this.on(_evtName, fn);
      return this;
    };
    EventBus.prototype.onfail = function(eventName, fn) {
      var _evtName = eventName + "/fail";
      this.on(_evtName, fn);
      return this;
    };
  })(EventBus);
  return EventBus;
});
