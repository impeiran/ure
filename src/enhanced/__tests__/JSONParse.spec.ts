import JSONParse from '../JSONParse'

describe('JSONParse', () => {
  test('always returns a list with 2 members', () => {
    expect(JSONParse('').length).toBe(2)
  })

  test('no error throwed while parsing json failed', () => {
    const parseJson = () => JSONParse('{123')
    expect(parseJson).not.toThrowError()

    const [err, value] = parseJson()
    expect(err).not.toBeNull()
    expect(value).toBeNull()
  })

  test('parse the correct json', () => {
    const [err, value] = JSONParse('{"a": 123}')
    expect(err).toBeNull()
    expect(value).toEqual({ a: 123 })
  })
})
