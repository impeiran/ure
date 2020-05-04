import clone from '../src/object/clone'
import extend from '../src/object/extend'
import cloneDeep from '../src/object/cloneDeep'
import getValue from '../src/object/getValue'
import omit from '../src/object/omit'
import isEqual from '../src/object/isEqual'

describe('OBJECT MODULE', () => {
  const target = {
    name: 'ure',
    type: 'utilities',
    func: ['clone', 'cloneDeep'],
    info: {
      author: 'impeiran'
    }
  }

  test('get value', () => {
    expect(getValue(target, 'info.author')).toEqual('impeiran')

    expect(getValue(target, 'func.1')).toEqual('cloneDeep')

    expect(getValue(target, 'func.3', 'test')).toEqual('test')

    expect(getValue(target, 'check')).toBeUndefined()

    expect(getValue(null, 'check')).toBeUndefined()
    expect(getValue()).toBeUndefined()
  })

  test('omit', () => {
    expect(omit(null)).toBeNull()
    expect(omit({ a: 1 }, target)).toEqual({
      a: 1
    })

    const targetKeys = Object.keys(target)

    const validate = (result, keyString) => {
      const keyLen = typeof keyString === 'string' ? keyString.split(/\s/).length : keyString.length
      const resultLen = Object.keys(result).length

      expect((targetKeys.length - keyLen))
        .toEqual(resultLen)

      targetKeys.forEach(k => {
        if (keyString.indexOf(k) !== -1) {
          expect(result.hasOwnProperty(k)).toBe(false)
        } else {
          expect(result.hasOwnProperty(k) && result[k] === target[k]).toBe(true)
        }
      })
    }

    validate(omit(target, 'info func'), 'info func')
    validate(omit(target, ['info', 'func']), ['info', 'func'])
  })

  test('object shallow clone', () => {
    const result = clone(target)

    expect(Object.keys(target).length).toEqual(Object.keys(result).length)

    Object.keys(result).forEach(k => {
      expect(target.hasOwnProperty(k)).toBe(true)
      expect(result[k]).toEqual(target[k])
    })

    expect(clone('123')).toEqual('123')
    expect(clone(null)).toBeNull()
  })

  test('object extend', () => {
    expect(extend()).toEqual({})
  })

  test('object deep clone', () => {
    const result = cloneDeep(target)

    expect(Object.keys(target).length).toEqual(Object.keys(result).length)

    const validateValueDeep = (objectOne, objectTwo) => {
      Object.keys(objectOne).forEach(k => {
        expect(objectTwo.hasOwnProperty(k)).toBe(true)
        expect(typeof objectOne[k] === typeof objectTwo[k])

        if (typeof objectOne[k] === 'object') {
          validateValueDeep(objectOne[k], objectTwo[k])
        } else {
          expect(objectOne[k]).toEqual(objectTwo[k])
        }
      })
    }

    validateValueDeep(target, result)

    target.info.author = 'nobody'
    expect(result.info.author).not.toBe(target.info.author)

    function test () { console.log('test') }
    expect(cloneDeep(test)).toEqual(test)

    expect(cloneDeep('123')).toEqual('123')
    expect(cloneDeep(null)).toBeNull()
  })

  test('isEqual', () => {
    expect(isEqual(6, 6)).toBe(true)

    expect(isEqual(NaN, NaN)).toBe(true)

    expect(isEqual(undefined, null)).toBe(false)

    expect(isEqual({
      left: 666,
      right: 999,
      myself: {
        love: 777
      }
    }, {
      left: 666,
      right: 999,
      myself: {
        love: 777,
        money: 0
      }
    })).toBe(false)

    expect(isEqual([
      1, 2, 3
    ], [
      4, 6
    ])).toBe(false)

    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true)

    expect(isEqual({
      a: 1,
      b: 2
    }, {
      a: 1,
      b: 2
    })).toBe(true)
  })
})
