/**
 * promisify setTimeout
 * @param ms micro second
 * @returns Promise
 */
const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export default delay
