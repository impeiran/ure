import ua, {
  isMobile,
  isPC,
  isIE,
  isEdge,
  isIOS,
  isIPad,
  isAndroid,
  isWeixin,
  isQQ,
  isDingTalk
} from './browser/ua'

import download from './browser/download'
import debounce from './browser/debounce'
import throttle from './browser/throttle'

import isTypeof from './lang/isTypeof'
import getType from './lang/getType'
import isEmpty from './lang/isEmpty'

import inRange from './number/inRange'
import midNumber from './number/midNumber'

import clone from './object/clone'
import cloneDeep from './object/cloneDeep'
import getValue from './object/getValue'
import omit from './object/omit'

import random from './other/random'
import randomColor from './other/randomColor'
import randomKey from './other/randomKey'

import isEmail from './reg/isEmail'
import isNumber from './reg/isNumber'
import isPhone from './reg/isPhone'
import isImage from './reg/isImage'

import {
  parseUrl,
  parseQuery,
  getUrlParam,
  setUrlParam
} from './url/index'

export default {
  ua,
  isMobile,
  isPC,
  isIE,
  isEdge,
  isIOS,
  isIPad,
  isAndroid,
  isWeixin,
  isQQ,
  isDingTalk,

  download,
  debounce,
  throttle,

  getType,
  isTypeof,
  isEmpty,

  inRange,
  midNumber,

  clone,
  cloneDeep,
  getValue,
  omit,

  random,
  randomColor,
  randomKey,

  isEmail,
  isNumber,
  isPhone,
  isImage,

  parseUrl,
  parseQuery,
  getUrlParam,
  setUrlParam
}
