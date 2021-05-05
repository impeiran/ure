/**
 * is plain object or not
 * @param target 
 * @returns boolean
 */
const isPlainObject = (target: unknown): boolean => Object.prototype
    .toString
    .call(target) === '[object, Object]'

export default isPlainObject
