type plainObject = {
  [index: string]: any;
}

/**
 * A isEqual to B
 * @param {Any} left
 * @param {Any} right
 */
const isEqual = (left: plainObject, right: plainObject): boolean => {
  if (typeof left !== typeof right) return false

  // both left and right are NaN
  // eslint-disable-next-line no-self-compare
  if (left !== left && right !== right) return true

  if (typeof left !== 'object' && typeof right !== 'object') return left === right

  if (Array.isArray(left) && Array.isArray(right)) {
    if (left.length !== right.length) return false

    return left.every((leftItem, index) => {
      return isEqual(leftItem, right[index])
    })
  }

  const leftKeys = Object.keys(left)
  const rightKeys = Object.keys(right)

  if (leftKeys.length !== rightKeys.length) return false

  return leftKeys.every((key) => {
    return right.hasOwnProperty(key) && isEqual(left[key], right[key])
  })
}

export default isEqual
