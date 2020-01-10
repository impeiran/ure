/**
 * 函数防抖
 * @param {Function} fn 需要截流的函数
 * @param {Number} wait 等待时长 单位ms
 */
const debounce = (fn, wait) => {
  let timer;

  return function () {
    const context = this;
    const args = arguments;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      return fn.apply(context, args);
    }, wait);
  };
}

export default debounce;