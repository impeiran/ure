import random from '../other/random'

/**
 * shuffle the list
 * @param {Array} list
 */
const shuffle = <T>(list: T[]) => {
  if (!list || !list.length) return []

  list = list.slice(0)

  let l = list.length
  while (l--) {
    const i = random(0, l)
    const temp = list[l]
    list[l] = list[i]
    list[i] = temp
  }

  return list
}

export default shuffle
