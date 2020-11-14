/**
 * remove items from the list, return new one
 * @param {Array} list
 * @param {...*} [values]
 *
 */
const remove = function <T>(list: T[], ...values: T[]): T[] {
  if (!list || !list.length) return []

  return list.filter((item: T) => values.indexOf(item) === -1)
}

export default remove
