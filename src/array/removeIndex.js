/**
 * remove items from the list by index, return new one
 * @param {Array} list
 * @param {...*} [indexes]
 *
 */
const removeIndex = function (list, ...indexes) {
  if (!list || !list.length) return []

  return list.filter((_, index) => indexes.indexOf(index) === -1)
}

export default removeIndex
