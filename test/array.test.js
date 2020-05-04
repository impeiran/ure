import chunk from '../src/array/chunk'
import remove from '../src/array/remove'
import removeIndex from '../src/array/removeIndex'
import shuffle from '../src/array/shuffle'

describe.only('ARRAY MODULE', () => {
  const demo = Array.from({ length: 11 }, (v, k) => k)

  test('chunk', () => {
    expect(chunk()).toEqual([])
    expect(chunk(demo)).toEqual(demo)
    expect(chunk(demo, 3)).toEqual([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [9, 10]
    ])
  })

  test('remove', () => {
    expect(remove()).toEqual([])
    expect(remove(demo)).toEqual(Array.from({ length: 11 }, (v, k) => k))
    expect(remove(demo, 2, 4, 5)).toEqual([
      0, 1, 3, 6, 7, 8, 9, 10
    ])
  })

  test('remove Index', () => {
    expect(removeIndex()).toEqual([])
    expect(removeIndex(demo)).toEqual(Array.from({ length: 11 }, (v, k) => k))
    expect(removeIndex(demo, 2, 4, 5)).toEqual([
      0, 1, 3, 6, 7, 8, 9, 10
    ])
  })

  test('shuffle', () => {
    const ret = shuffle(demo)
    expect(shuffle()).toEqual([])
    expect(ret.length === demo.length).toBe(true)
    expect(ret.every((item, index) => {
      return item === demo[index]
    })).toBe(false)
  })
})
