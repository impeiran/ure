# ure

ure is a lib with some utility functions used frequently. Most of these functions are faced to browser.Inspired by `lodash` and `bbo`.

## **Installation**

```bash
# use npm
npm install ure --save

# use cnpm
cnpm install ure --save

# use yarn
yarn add ure
```

**Or you can download the js file**: [github](https://github.com/impeiran/ure/blob/master/dist)

- ure.js [click here](https://github.com/impeiran/ure/tree/master/dist/ure.js)
- ure.min.js [click here](https://github.com/impeiran/ure/tree/master/dist/ure.min.js)

## **Usage**

Use CommonJS module

```javascript
const ure = require('ure')
ure.getCookie()
```

Use ES module

```javascript
import ure from 'ure'
ure.isEmpty(list)
```

Or require/import individual function

```javascript
import isEmpty from 'ure/isEmpty'

const parseCookie = require('ure/parseCookie')
```

## browser

### ua

`ure.ua(tag?)`

Get the user agent

**arguments**

`tag(string)`: lower case

**example**

```javascript
ure.ua()
// output: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4)...

ure.ua('i')
// output: mozilla/5.0 (macintosh; intel mac os x 10_15_4)...
```

### isIE

`ure.isIE()`

Check whether the browser is IE

**example**

```javascript
ure.isIE() // return boolean
```

### isEdge

`ure.isEdge`

Check whether the browser is Edge

**example**

```javascript
ure.isEdge() // return boolean
```

### isPC

`ure.isPC()`

Check whether the browser is running on a PC

**example**

```javascript
ure.isPC() // return boolean
```

### isMobile

`ure.isMobile()`

Check whether the browser is running on a mobile phone

**example**

```javascript
ure.isMobile() // return boolean
```

### isAndroid

`ure.isAndroid()`

Check whether the browser is running on Andorid

**example**

```javascript
ure.isAndroid() // return boolean
```

### isIOS

`ure.isIOS()`

Check whether the browser is running on IOS

**example**

```javascript
ure.isIOS() // return boolean
```

### isIpad

`ure.isIpad()`

Check whether the browser is running on an ipad

**example**

```javascript
ure.isIpad() // return boolean
```

### isQQ

`ure.isQQ()`

Check whether website is running in QQ

**example**

```javascript
ure.isQQ() // return boolean
```

### isWeixin

`ure.isWeixin()`

Check whether website is running in wechat

**example**

```javascript
ure.isWeixin() // return boolean
```

### isDingTalk

`ure.isDingTalk()`

Check whether website is running in dingtalk

**example**

```javascript
ure.isDingTalk() // return boolean
```

### throttle

`ure.throttle(fn, delay)`

Creates a throttled function that only invokes `fn` at most once per every `delay` milliseconds

**arguments**

`fn(Function)`: the function to throttle

`[delay=0](Number)`: the number of milliseconds to throttle invocations.

**example**

```javascript
window.onresize = ure.throttle(() => {
  console.log('test throttle window resize')
}, 300)
```

### debounce

`ure.debounce(fn, delay)`

Creates a debounced function that delays invoking `fn` until after `delay` milliseconds have elapsed since the last time the debounced function was invoked.

**arguments**

`fn(Function)`: the function to debounce

`[delay=0](Number)`: the number of milliseconds to debounce invocations.

**example**

```javascript
window.onresize = ure.debounce(() => {
  console.log('test debounce window resize')
}, 300)
```

## url

### getUrlParam

`ure.getUrlParam(url, key)`

Get the param from the url target

**arguments**

`url(String)` target url

`key(String)` key of the param

**example**

```javascript
const url = 'http://github.com?s=ure&author=impeiran'
ure.getUrlParam(url, 'author')	// output: "impeiran"
ure.getUrlParam(url, 'publish')	// output: "null"
```

### setUrlParam

`ure.setUrlParam(url, key, value)`

Set the param of url with value

**auguments**

`url(String)` target url

`key(String)` key of the param

`value(String)` value of the key

**example**

```javascript
const url = 'http://github.com?s=ure'
ure.setUrlParam(url, 's', 'axios')
// output: "http://github.com?s=axios"
ure.setUrlParam(url, 'name', 'impeiran')
// output: "http://github.com?s=axios&name=impeiran"
```

### parseUrl

`ure.parseUrl(url)`

Parse the url string into object

> Ps: we use the "a" Element to parse the url, so this api cannot use in node env. please use nodejs url module instead.

**auguments**

`url(String)` target url

**returns**

`object:`

| key      | type   |
| -------- | ------ |
| protocol | string |
| host     | string |
| origin   | string |
| port     | string |
| pathname | string |
| search   | string |
| hash     | string |
| query    | Object |

**example**

```javascript
const url = 'http://localhost/test?name=ure&type=util#part_one'
ure.parseUrl(url)
/* output
	 {
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
	 }
*/
```

### parseQuery

`ure.parseQuery(query)`

parse the query string into query object

**arguments**

`query(String)`: query string

**example**

```javascript
const url = 'http://localhost/test?name=ure&type=util'
ure.parseQuery(url)
/* output:
	{
		name: 'ure',
		type: 'util'
	}
*/
```

## cookie

### getCookie

`ure.getCookie(name)`

**arguments**

`name(String)`  the key name

**example**

```javascript
ure.getCookie('name')
// output: ure
```

### setCookie

`ure.setCookie(name, value, option?)`

use document.cookie api to set cookie

**auguments**

`name(String)` cookie name

`value(String)` cookie value

`option?(Object)` cookie option

| key     | type           | required |
| ------- | -------------- | -------- |
| expires | Date \| String | false    |
| path    | String         | false    |
| domain  | String         | false    |
| secure  | Boolean        | false    |

### parseCookie

`ure.parseCookie(str)`

parse the cookie string to key-value object

**arguments**

`str(String)`: cookie string

**example**

```javascript
ure.parseCookie(document.cookie) // output: {name: '' }
```

## reg

### isNumber

`ure.isNumber(target)`

check if the variable is number or numeric string.

**example**

```javascript
ure.isNumber(12)    // true
ure.isNumber('12')  // true
ure.isNumber('12.23') // true
ure.isNumber('0.73')  // true
```

### isImage

`ure.isImage(str)`

check if the string is a image url

**arguments**

`str(String)` url string

**example**

```javascript
ure.isImage('test.jpg') // true
ure.isImage('test.png') // true
ure.isImage('test.gif') // true
ure.isImage('oss.impeiran.com/demo.png?oss=image/quality,q_90') // true
```

### isEmail

`ure.isEmail(str)`

check if the string is a email address

**arguments**

`str(String)`  email string

**example**

```javascript
ure.isEmail('jafv@.c') // false
ure.isEmail('micheal@163.com' // true
```

### isPhone

`ure.isPhone(str)`

check if the string is a phone format string

**arguments**

`str(String)` phone string

**example**

```javascript
isPhone('020-86601234') // true
isPhone('020-866012342') // false
isPhone('13247479090') // true
isPhone('+86 13247479090') // true
isPhone('86 13247479090')) // true
isPhone('86 1324740') // false
```

## nature

### getType

`ure.getType(target)`

use Object.prototype.toString to get the type, and then return a lowercase string

**argumenst**

`target(Any)` any variable

**example**

```javascript
ure.getType(undefined) // 'undefined'
ure.getType(null) // 'null'
ure.getType([]) // 'array'
ure.getType({}) // 'object'
ure.getType(1) // 'number'
ure.getType('1') // 'string'
ure.getType(new Set([1, 1, 2])) // 'set'
```

### isTypeof

`ure.isTypeof(variable, type)`

**argumenst**

`variable(Any)`

`type(String)`

**example**

```javascript
ure.isTypeof(undefined, 'undefined') // true
ure.isTypeof(null, 'null') // true
ure.isTypeof([], 'array') // true
ure.isTypeof({}, 'object') // true
ure.isTypeof(1, 'number') // true
ure.isTypeof('1', 'string') // true
ure.isTypeof(new Set([1, 1, 2]), 'set') // true
```

### isEmpty

`ure.isEmpty(variable)`

Check if the variable is empty. falsy variable would be false.

**arguments**

`variable(Any)`

**example**

```javascript
ure.isEmpty(undefined) // true
ure.isEmpty(null) // true
ure.isEmpty({}) // true
ure.isEmpty([]) // true
ure.isEmpty([1]) // false
```

## object

### clone

`ure.clone(target)`

shallow clone the variable.

**arguments**

`target(Object | Array)` variable

**example**

```javascript
const target = {a: 1, b: 2}
const newTarget = ure.clone(target) // {a: 1, b: 2}

console.log(target === newTarget) // false
```

### cloneDeep

`ure.cloneDeep(target)`

deep clone the variable, using the recurse

**arguments**

`target(Any)` variable

**example**

```javascript
const target = {
  a: 1,
  b: {
    c: 777
  }
}

const newTarget = ure.cloneDeep(target)
/*
	{
	 	a: 1,
	 	b: {
	 		c: 777
	 	}
	}
*/
console.log(target.b === newTarget.b) // false
```

### extend

`ure.extend(...object)`

extend the first object with the rest of argument objects. The latter one wound cover the former one's property. Just like `object.assign`

**arguments**

`object[, objects...]`

**returns**

return the first argument

**example**

```javascript
const one = {a: 1}
const two = {b: 2}
ure.extend(one, two) // one: {a: 1, b: 2}

const three = {c: 3}
const four = {d: 4}
ure.extend(four, three, one)
// four: { a: 1, b: 2, c: 3, d: 4 }
```

### getValue

`ure.getValue(target, path, defaultValue?)`

Gets the value at `path` of `object`.

**arguments**

`target(Object)` target object

`path(String)`  the path of the prop

`defaultValue?(Any)` if the resolved value is undefined/null, defaultValue will be returned

**example**

```javascript
const target = {
  a: 1,
  b: 2,
  c: {
    d: 1
  }
}
ure.getValue(target, 'a.c') 	// {d: 1}
ure.getValue(target, 'a.c.d') // 1
ure.getValue(target, 'a.e')		// undefined
ure.getValue(target, 'a.e', []) // []
```

### isEqual

`ure.isEqual(left, right)`

make a deep comparision between two values, check if the left equals to the right.

**arguments**

`left(Any)` the value to compare

`right(Any)` the other value to compare

**example**

```javascript
ure.isEqual([1, 2], [1, 2, 3]) // false
ure.isEqual({a: 1}, {b: 2})		 // false
ure.isEqual(77, 66)						 // false
```

### omit

`ure.omit(obj, props)`

remove the list properties of the obj, return new object

**arguments**

`obj(Object)` target object

`props(String [])` props array

**example**

```javascript
const target = {a: 1, b: 2, c: 3}
const ret = ure.omit(target, ['a', 'b'])
console.log(ret) // {c: 3}
```

## array

### chunk

`ure.chunk(list, size)`

Creates an array of elements split into groups the length of `size`

**arguments**

`list(Array)`  the list to process

`size(Number)`  the size of each chunk

**example**

```javascript
ure.chunk([1, 2, 3, 4, 5, 6], 2)
// [[1, 2], [3, 4], [5, 6]]

ure.chunk([1, 2, 3, 4, 5, 6], 4)
// [[1, 2, 3, 4], [5, 6]]
```

### remove

`ure.remove(list, ...targets)`

remove all elements from arrays, which targets include.

> use "===". to compare

**arguments**

`list(Array)` elements list

`...targets`  the elements to remove

**example**

```javascript
const list = [6, 11, 8]
console.log(ure.remove(list, 11, 8))
// [6]
```

### removeIndex

`ure.removeIndex(list, ...indexes)`

remove all elements from arrays that match the indexes

**arguments**

`list(Array)` elements list

`...indexes`  the index of elements need to remove

**example**

```javascript
const target = ['a', 'b', 'c']
console.log(ure.removeIndex(target, 1, 2))
// ['a']
```

### shuffle

`ure.shuffle(array)`

shuffle the array, and return new ones.

**arguments**

`array(Array)` the array to shuffle

**example**

```javascript
const current = ure.shuffle([1, 2, 3, 4, 5])
// [3, 2, 5, 4, 1]
```

## number

### inRange

`ure.inRange(start, end, n)`

Checks if `n` is between `start` and up to `end`, including themselves.

**arguments**

`start(Number)`

`end(Number)`

`n(Number)`

**example**

```javascript
ure.inRange(1, 10, 7) // true
ure.isRange(4, 5, 8)  // false
```

### midNumber

`ure.midNumber(start, end)`

calc the mid number between `start` and `end`

**arguments**

`start(Number)`

`end(Number)`

**example**

```javascript
ure.midNumber(2, 4) // 3
ure.midNumber(10, 5) // 7.5
```

## other

### random

`ure.random(lower = 0, upper = 1, floor = true)`

get a random number between lower and upper

**arguments**

`lower(Number)`

`upper(Number)`

`floor(Boolean)`  flag to keep the decimal

**example**

```javascript
ure.random(0, 10)   // 8
ure.random(2, 4)		// 2
ure.random(3, 5, false)  //	4.063915810885264
```

### randomColor

`ure.randomColor()`

make a random color hex

**example**

```javascript
ure.randomColor() // #d76e68
ure.randomColor() // #c2b9e2
```

### randomKey

`ure.randomKey(len = 16)`

make a random string

**arguments**

`len(Number)`

**example**

```javascript
ure.randomKey() // HWBfHcb5PRhkCkMM
ure.randomKey(6) // Hc3yA2
```

