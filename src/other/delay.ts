/**
 * promisify setTimeout
 * @param ms micro second
 * @returns Promise
 */
const delay = (ms: number): Promise<void> => new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

export default delay
