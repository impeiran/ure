/**
 * 判断是否在范围内
 * @param {Number} left 左边界
 * @param {Number} right 右边界
 * @param {Number} target 目标值
 */
const inRange = (left, right, target) => {
  if ([left, right, target].some(item => typeof item !== 'number')) { return false }

  if (left > right) {
    [left, right] = [right, left];
  }

  return target >= left && target <= right;
}

export default inRange;
