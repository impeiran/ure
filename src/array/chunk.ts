/**
 * slice the array into some chunks with length of num
 * @param {Array} list
 * @param {Number} num
 */
const chunk = <T>(list: T[], num: number): T[][] | T[] => {
  if (!list || !list.length) return []
  if (!num) return list

  const result: T[][] = []

  for (let i = 0, len = list.length; i < len; i += num) {
    let index = i
    const ceil = Math.min(i + num, len)
    const slicing: T[] = []
    while (index < ceil) {
      slicing.push(list[index++])
    }
    result.push(slicing)
  }
  return result
}

export default chunk
