Function.prototype.yeBind = function (thisArg, ...args) {
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  const targetFn = this;

  return function (...proxyArgs) {
    const fn = Symbol();
    thisArg[fn] = targetFn;

    const result = thisArg[fn](...args, ...proxyArgs);

    delete thisArg[fn];

    return result;
  };
};
