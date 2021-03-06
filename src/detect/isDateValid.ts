/**
 * is value can be parsed to a valid Date
 * @param target 
 * @returns boolean
 */
const isDateValid = (target: Date | string | number | undefined | null): boolean => {
  if (target === undefined || target === null) return false

  const toDate = target instanceof Date
    ? target
    : new Date(target)
  
  return !Number.isNaN(toDate.getTime())
}

export default isDateValid
