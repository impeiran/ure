/**
 * 取中间值
 * @param {Number} left 左边界值
 * @param {Number} right 右边界值
 */
const midNumber = (left, right) => {
  if (typeof left !== 'number' || typeof right !== 'number') return NaN;

  if (left > right) {
    [left, right] = [right, left]
  }

  return ((right - left) / 2) + left;
}

export default midNumber;
