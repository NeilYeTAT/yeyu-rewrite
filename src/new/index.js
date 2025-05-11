function yeNew(createFn, ...args) {
  const instance = Object.create(createFn.prototype);

  const result = createFn.call(instance, args);

  return typeof result === "function" || typeof result === "object"
    ? result
    : instance;
}
