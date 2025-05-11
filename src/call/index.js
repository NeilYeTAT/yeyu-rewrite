// * 手写 call 实现

Function.prototype.yeCall = function (thisArg, ...args) {
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  // * 防止函数重名
  const fn = Symbol();

  // * 给函数绑定到传入的 this 上
  thisArg[fn] = this;

  const result = thisArg[fn](...args);

  delete thisArg[fn];

  return result;
};
