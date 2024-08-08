export function throttle(callback, timeout = 500) {
  let waiting = false;
  return function (...args) {
    if (!waiting) {
      waiting = true;
      setTimeout(() => {
        callback.apply(null, args);
        waiting = false;
      }, timeout);
    }
  };
}
