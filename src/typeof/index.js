function yeTypeof(o) {
  return Object.prototype.toString.call(o).slice(8, -1);
}
