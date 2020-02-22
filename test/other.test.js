import random from '../src/other/random'
import randomKey from '../src/other/randomKey'
import randomColor from '../src/other/randomColor'

describe('OTHER MODULE', () => {
  test('random function', () => {
    const result1 = expect(random(3, 10))
    result1.toBeGreaterThanOrEqual(3)
    result1.toBeLessThan(10)

    expect(random(0, 1, false)).toBeGreaterThan(0.00000001)
    expect(random(undefined, undefined, false)).toBeGreaterThan(1e-17)
  })
  
  test('random key', () => {
    const KEY_SIGN_LIST = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    const reg = new RegExp('[' + KEY_SIGN_LIST + ']+')

    const result1 = randomKey(15)
    expect(result1.length).toBe(15)
    expect(reg.test(result1)).toBe(true)

    const result2 = randomKey()
    expect(result2.length).toBe(16)
    expect(reg.test(result2)).toBe(true)
  })

  test('random color', () => {
    const result = randomColor()
    expect(result.length).toBe(7)

    expect(result.charAt(0)).toBe('#')

    expect(/^#([0-9a-f]{2}){3}$/.test(result)).toBe(true)
  })
  
})