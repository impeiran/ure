import shuffle from '../src/array/shuffle'

describe.only('ARRAY MODULE', () => {
  const demo = Array.from({ length: 11 }, (v, k) => k)

  test('shuffle', () => {
    const ret = shuffle(demo)
    expect(shuffle()).toEqual([])
    expect(ret.length === demo.length).toBe(true)
    expect(ret.every((item, index) => {
      return item === demo[index]
    })).toBe(false)
  })
})
