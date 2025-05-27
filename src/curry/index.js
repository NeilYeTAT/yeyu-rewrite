// * 修改为接受一个参数的函数，并实现功能
function add(a, b, c, d) {
  console.log(a + b + c + d);
}

// * 实现目标
curry(add)(1)(2)(3)(4);
curry(add, 1, 2)(3, 4);
curry(add)(1, 2, 3)(4);

// * 第一次也接受参数
function curry(fn, ...args) {
  return function curried(...newArgs) {
    const allArgs = [...args, ...newArgs];

    return allArgs.length >= fn.length
      ? fn.apply(this, allArgs)
      : curry(fn, ...allArgs);
  };
}
