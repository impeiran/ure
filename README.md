# ure

[![npm version](https://img.shields.io/npm/v/ure.svg)](https://badge.fury.io/js/ure) ![gzip size](https://img.shields.io/bundlephobia/minzip/ure.svg?label=gzip%20size) ![license](https://img.shields.io/badge/license-MIT-blue.svg)

ure is a lib with some utility functions used frequently. Most of these functions are faced to browser.Inspired by `lodash` and `bbo`.

[Documents](https://impeiran.github.io/ure)

## **Installation**

```bash
# use npm
npm install ure --save

# use cnpm
cnpm install ure --save

# use yarn
yarn add ure
```

**Or you can download the js file**:

- ure.js [click here](https://github.com/impeiran/ure/raw/master/dist/ure.js)
- ure.min.js [click here](https://github.com/impeiran/ure/raw/master/dist/ure.min.js)

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