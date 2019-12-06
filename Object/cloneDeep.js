/**
 * 深拷贝
 * @param {Object} target 
 */
function cloneDeep (target) {
  const isArray = Array.isArray(target)

  let result = isArray ? [] : {}

  if (isArray) {
    result = target.map(item => cloneDeep(item))
  } else {
    for (let k in target) {
      
    }
  }


}

export default cloneDeep
