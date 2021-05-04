import getTypeOf from '../src/nature/getTypeOf'

describe('LANG MODULE', () => {
  test('get type', () => {
    expect(getTypeOf(undefined)).toBe('undefined')
    expect(getTypeOf(null)).toBe('null')
    expect(getTypeOf([])).toBe('array')
    expect(getTypeOf({})).toBe('object')
    expect(getTypeOf(1)).toBe('number')
    expect(getTypeOf('1')).toBe('string')
    expect(getTypeOf(new Set([1, 1, 2]))).toBe('set')
  })
})
