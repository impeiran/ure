# ure
[![npm version](https://img.shields.io/npm/v/ure.svg)](https://badge.fury.io/js/ure) ![gzip size](https://img.shields.io/bundlephobia/minzip/ure.svg?label=gzip%20size) ![license](https://img.shields.io/badge/license-MIT-blue.svg)

> ure is a lib with some utility functions used frequently

## install

Using npm:

```bash
npm install ure --save
```

Using yarn:

```bash
yarn add ure
```

Get raw:

<a href="<https://raw.githubusercontent.com/impeiran/ure/master/dist/ure.js>">common</a>

<a href="<https://raw.githubusercontent.com/impeiran/ure/master/dist/ure.min.js>">min</a>

## browser-support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| All ✔                                                        | All ✔                                                        | All ✔                                                        | Latest ✔                                                     | Latest ✔                                                     | 11✔                                                          |

## bom

##### ua

```javascript
ure.ua()
// output window.userAgent
// example: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36

ure.ua('i')
// get ua in lower case
ure.isMobile()
// return true if in mobile-phone browser
ure.isPC()
// return true if in PC browser
ure.isIE()
// return true if in IE
ure.isEdge()
// return true if in Edge

// and more
// ...
ure.isIOS()
ure.isIPad()
ure.isAndroid()
ure.isWeixin()
ure.isQQ()
ure.isDingTalk()
```

##### download(url [option])

```javascript
ure.download('http://localhost:8989/file.txt')
// then it will open a dialog to save file, default with GET

ure.download({
    type: 'get',
    url: 'http://localhost:8989/file.txt',
    name: 'hello-world.txt'
})

// or use POST
ure.download({
    type: 'post',
    url: 'http://localhost:8989/file',
    data: {
        contracts: [{ id: 6, type: 'desk' }]
    }
})
```

option:

```javascript
{
    // required, default to get
    type: ['get', 'post'],
    
    // required
    url: '',
    
    // rename file
    // if "content-disposition": "attachment" exsit in HTTP Response Header, it'll not work
    name: '',

    // data for POST
    data: [Object]
}
```

##### debounce(fn[, delay])

> call function in lower frequency, only the last calling will apply after delay 

```javascript
const handler = () => {
    console.log(666)
}
window.onresize = ure.debounce(handler, 300)
```

##### throttle(fn[, interval])

> call function in lower frequency,  calling at every interval

```javascript
const handler = () => {
    console.log(666)
}
window.onresize = ure.throttle(handler, 300)
```

## lang

##### getType(variable)

>return type(String) of target variable in lower case

```javascript
ure.getType(6)
// number
ure.getType([1, 2, 3])
// array
ure.getType({})
// object
ure.getType("123")
// string

// ...
```

##### isTypeof(variable, type)

> return Boolean

```javascript
ure.isTypeof("666", "string")
// true
```

##### isEmpty(variable)

> return Boolean

```javascript
ure.isEmpty([])
// true
ure.isEmpty({})
// true
ure.isEmpty(undefined)
// true
ure.isEmpty(null)
// true
```

## number

##### inRange(left, right, target)

```javascript
ure.inRange(2, 8, 6)
// true
ure.inRange(8, 11, 20)
// false
```

##### midNumber(left, right)

```javascript
ure.midNumber(15, 20)
// 17.5
```

## object

##### clone(object)

> shallow clone

```javascript
const shallowClone = ure.clone({a: 1, b: 2})
```

##### cloneDeep(object)

```javascript
const newObj = ure.cloneDeep({
	a: 1,
	b: 2,
	c: [4, 5, 6],
	d: {
		target: 'check'
	}
})
```

##### getValue(object, key)

```javascript
const target = {
	c: [4, 5, 6],
	d: {
		target: 'check'
	}
}
ure.getValue(target, 'd.target')
// output: 'check'
```

##### omit(object, key)

> delete the key in object

```javascript
const target = {
	a: 1,
	b: 4,
	c: [4, 5, 6],
	d: {
		target: 'check'
	}
}

ure.omit(target, 'a,b')
/* output:
*	{
*	  c: [4, 5, 6],
*	  d: {
*	   	 target: 'check'
*	  }
*	}
*/
```

## url

```javascript
const url = 'http://localhost:8989/article?id=123&type=edit'

ure.parseQuery(url)
// {id: "123", type: "edit"}

ure.getUrlParam(url, 'id')
// 123

ure.setUrlParam(url, 'id', 44)
// 'http://localhost:8989/article?id=44&type=edit'

ure.parseUrl(url)
/**
 * {
 *   hash: "",
 *   host: "localhost:8989",
 *   origin: "http://localhost:8989",
 *   pathname: "/article",
 *   port: "8989",
 *   protocol: "http:",
 *   query: {id: "123", type: "edit"},
 *   search: "?id=123&type=edit"
 * }
 */
```

## other

##### random(left, right, [, floor])

> floor default to true

```javascript
ure.random(1, 10)
// 7
ure.random(1, 20, false)
// 12.30700072743505
```

##### randomKey(length)

> length default to 16

```javascript
ure.randomKey(10)
// "ekSa7WxAAK"
```

##### randomColor()

```javascript
ure.randomColor()
// "#559513"
```

## reg

```javascript
ure.isEmail('13247661@163.com')
// true

ure.isPhone('020-12345678')
// true
ure.isPhone('13248715206')
// true

ure.isImage('http://www.baidu.com/img/404.jpg')
// true

ure.isNumber(12.06)
// true
```

