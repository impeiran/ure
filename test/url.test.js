import _handleSearch from '../src/url/_handleSearch'
import parseUrl from '../src/url/parseUrl'
import parseQuery from '../src/url/parseQuery'
import getUrlParam from '../src/url/getUrlParam'
import setUrlParam from '../src/url/setUrlParam'

describe('URL_MODEULE', () => {
  const url = 'http://localhost/test?name=ure&type=util#part_one'
  const url2 = 'https://localhost'

  test('parse url', () => {
    expect(parseUrl({})).toBe(null)

    expect(parseUrl(url)).toEqual({
      protocol: 'http:',
      host: 'localhost',
      port: '',
      origin: 'http://localhost',
      pathname: '/test',
      query: {
        name: 'ure',
        type: 'util'
      },
      search: '?name=ure&type=util',
      hash: 'part_one'
    })

    expect(parseUrl(url2)).toEqual({
      protocol: 'https:',
      host: 'localhost',
      port: '',
      hash: '',
      query: {},
      search: '',
      pathname: '/',
      origin: 'https://localhost'
    })
  })

  test('parse query', () => {
    expect(parseQuery()).toEqual({})

    expect(parseQuery('')).toEqual({})

    expect(parseQuery(url)).toEqual({
      name: 'ure',
      type: 'util'
    })

    expect(parseQuery('www.baidu.com')).toEqual({})

    expect(parseQuery('www.baidu.com?q=666&s=123')).toEqual({
      q: '666',
      s: '123'
    })
  })

  test('get url param', () => {
    expect(getUrlParam(url, '')).toBeNull()
    expect(getUrlParam()).toBeNull()

    expect(getUrlParam(url, 'name')).toBe('ure')

    expect(getUrlParam(url, 'jest')).toBeFalsy()

    expect(getUrlParam('192.168.0.154?mode=', 'mode')).toBeFalsy()
  })

  test('set url param', () => {
    expect(setUrlParam(url, '')).toBe(url)
    expect(setUrlParam()).toBeUndefined()

    expect(setUrlParam('www.baidu.com', 'empty', true))
      .toBe('www.baidu.com?empty=true')

    expect(setUrlParam(url, 'jest', 29))
      .toBe('http://localhost/test?name=ure&type=util&jest=29#part_one')

    expect(setUrlParam(url, 'type', 'utilities'))
      .toBe('http://localhost/test?name=ure&type=utilities#part_one')
  })

  test('handle search query', () => {
    expect(_handleSearch('=aa&test=')).toEqual({
      test: ''
    })
    expect(_handleSearch('=aa&test')).toEqual({})
  })
})
