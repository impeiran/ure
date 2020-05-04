/**
 * slice the array into some chunks with length of num
 * @param {Array} list
 * @param {Number} num
 */
const chunk = (list, num) => {
  if (!list || !list.length) return []
  if (!num) return list

  const result = []

  for (let i = 0, len = list.length; i < len; i += num) {
    let index = i
    const ceil = Math.min(i + num, len)
    const slicing = []
    while (index < ceil) {
      slicing.push(list[index++])
    }
    result.push(slicing)
  }
  return result
}

export default chunk
