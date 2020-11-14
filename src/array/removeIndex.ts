/**
 * remove items from the list by index, return new one
 * @param {Array} list
 * @param {...*} [indexes]
 *
 */
const removeIndex = function <T>(list: T[], ...indexes: number[]) {
  if (!list || !list.length) return []

  return list.filter((_: T, index: number) => indexes.indexOf(index) === -1)
}

export default removeIndex
