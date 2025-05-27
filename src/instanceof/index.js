// * 递归或者循环向上寻找

// * 函数有 prototype，对象有 __proto__
// * 函数.prototype === 对象.__proto__
// * 通过 Object.getPrototypeOf(对象) 获取 __proto__

// * left yeInstanceof right
function yeInstanceof(left, right) {
  if (typeof left !== "object" || left === null) {
    return false;
  }

  let leftProto = Object.getPrototypeOf(left);

  while (leftProto !== null) {
    if (leftProto === right.prototype) {
      return true;
    }
    leftProto = Object.getPrototypeOf(leftProto);
  }

  return false;
}

function yeInstanceofRecursion(left, right) {
  if (typeof left !== "object" || left === null) {
    return false;
  }

  let leftProto = Object.getPrototypeOf(left);

  if (leftProto === null) {
    return false;
  }

  if (leftProto === right.prototype) {
    return true;
  }

  return yeInstanceofRecursion(leftProto, right);
}
