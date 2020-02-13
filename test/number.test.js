import inRange from '../src/number/inRange'
import midNumber from '../src/number/midNumber'

describe('NUMBER MODULE', () => {
  test('test inRange', () => {
    expect(inRange('1', '3', 2)).toBe(false)
    expect(inRange(1, 3, 2)).toBe(true)
    expect(inRange(1, 3, 5)).toBe(false)
    expect(inRange(3, 1, 5)).toBe(false)
  })

  test('test mid number', () => {
    expect(midNumber('4', 2)).toBeFalsy()
    expect(midNumber(4, 2)).toBe(3)
    expect(midNumber(2, 4)).toBe(3)
  })
})