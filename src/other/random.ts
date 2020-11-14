/**
 *
 * @param {Number} min 下限(包含)
 * @param {Number} max 上限(不包含)
 * @param {Boolean} floor 向下取整
 */
const random = (min = 0, max = 1, floor = true): number => {
  const result = Math.random() * (max - min) + min
  return floor ? Math.floor(result) : result
}

export default random
