import random from '../src/other/random'

describe('OTHER MODULE', () => {
  test('random function', () => {
    const result1 = expect(random(3, 10))
    result1.toBeGreaterThanOrEqual(3)
    result1.toBeLessThan(10)

    expect(random(0, 1, false)).toBeGreaterThan(0.00000001)
    expect(random(undefined, undefined, false)).toBeGreaterThan(1e-17)
  })
})
