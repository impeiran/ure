import getType from '../src/nature/getType'
import isEmpty from '../src/nature/isEmpty'
import isTypeof from '../src/nature/isTypeof'

describe('LANG MODULE', () => {
  test('is empty ', () => {
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty([])).toBe(true)
    expect(isEmpty({})).toBe(true)

    expect(isEmpty(1)).toBe(false)
  })

  test('get type', () => {
    expect(getType(undefined)).toBe('undefined')
    expect(getType(null)).toBe('null')
    expect(getType([])).toBe('array')
    expect(getType({})).toBe('object')
    expect(getType(1)).toBe('number')
    expect(getType('1')).toBe('string')
    expect(getType(new Set([1, 1, 2]))).toBe('set')
  })

  test('is type of ', () => {
    const a = undefined
    expect(isTypeof(a, 'undefined')).toBe(true)
    expect(isTypeof(a, a)).toBe(false)
  })
})
