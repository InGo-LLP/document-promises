import Promise from "pinkie-promise";

// thenfied document ready states
function thenify(type, readyState) {
  return new Promise(function(resolve) {
    var listener = function() {
      if (readyState.test(document.readyState)) {
        document.removeEventListener(type, listener);

        resolve();
      }
    }

    document.addEventListener(type, listener);

    listener();
  });
}

// export thenfied parsed, contentLoaded, and loaded
export var parsed = thenify("readystatechange", /^(?:interactive|complete)$/);
export var contentLoaded = thenify("DOMContentLoaded", /^(?:interactive|complete)$/);
export var loaded = thenify("readystatechange", /^complete$/);
