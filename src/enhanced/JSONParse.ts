/**
 * safe json parse
 * @param {Parameters<typeof JSON.parse>} args
 * @returns {[Error | null, any]}
 */
const JSONParse = (
  ...args: Parameters<typeof JSON.parse>
): [Error | null, any] => {
  let value = null
  let error = null

  try {
    value = JSON.parse.apply(null, args)
  } catch (error) {
    error = error
  }

  return [error, value]
}

export default JSONParse
