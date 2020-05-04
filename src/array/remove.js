/**
 * remove items from the list, return new one
 * @param {Array} list
 * @param {...*} [values]
 *
 */
const remove = function (list, ...values) {
  if (!list || !list.length) return []

  return list.filter(item => values.indexOf(item) === -1)
}

export default remove
