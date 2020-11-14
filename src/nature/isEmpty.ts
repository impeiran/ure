/**
 * 判空
 * @param {Any} target
 */
const isEmpty = (target: any) => {
  return [Object, Array].indexOf((
    typeof target === 'number' ? target : target || {}
  ).constructor) > -1 &&
    !Object.keys((target || {})).length
}

export default isEmpty
