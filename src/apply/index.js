Function.prototype.yeApply = function (thisArg, argArray) {
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  const fn = Symbol();

  thisArg[fn] = this;

  // * 可以不传参数
  const result = argArray ? thisArg[fn](...argArray) : thisArg[fn]();

  delete thisArg[fn];

  return result;
};
