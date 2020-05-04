import ua from './browser/ua'
import isAndroid from './browser/isAndroid'
import isDingTalk from './browser/isDingTalk'
import isEdge from './browser/isEdge'
import isIE from './browser/isIE'
import isIOS from './browser/isIOS'
import isIpad from './browser/isIpad'
import isMobile from './browser/isMobile'
import isPC from './browser/isPC'
import isQQ from './browser/isQQ'
import isWeixin from './browser/isWeixin'

import debounce from './browser/debounce'
import throttle from './browser/throttle'

import isTypeof from './nature/isTypeof'
import getType from './nature/getType'
import isEmpty from './nature/isEmpty'

import inRange from './number/inRange'
import midNumber from './number/midNumber'

import extend from './object/extend'
import clone from './object/clone'
import cloneDeep from './object/cloneDeep'
import getValue from './object/getValue'
import omit from './object/omit'
import isEqual from './object/isEqual'

import chunk from './array/chunk'
import remove from './array/remove'
import removeIndex from './array/removeIndex'
import shuffle from './array/shuffle'

import random from './other/random'
import randomColor from './other/randomColor'
import randomKey from './other/randomKey'

import isEmail from './reg/isEmail'
import isNumber from './reg/isNumber'
import isPhone from './reg/isPhone'
import isImage from './reg/isImage'

import parseUrl from './url/parseUrl'
import parseQuery from './url/parseQuery'
import getUrlParam from './url/getUrlParam'
import setUrlParam from './url/setUrlParam'

import getCookie from './cookie/getCookie'
import setCookie from './cookie/setCookie'
import parseCookie from './cookie/parseCookie'

export default {
  ua,
  isMobile,
  isPC,
  isIE,
  isEdge,
  isIOS,
  isIpad,
  isAndroid,
  isWeixin,
  isQQ,
  isDingTalk,

  debounce,
  throttle,

  getType,
  isTypeof,
  isEmpty,

  inRange,
  midNumber,

  extend,
  clone,
  cloneDeep,
  getValue,
  omit,
  isEqual,
  chunk,
  remove,
  removeIndex,
  shuffle,

  random,
  randomColor,
  randomKey,

  isEmail,
  isNumber,
  isPhone,
  isImage,

  getCookie,
  setCookie,
  parseCookie,

  parseUrl,
  parseQuery,
  getUrlParam,
  setUrlParam
}
