import ua from './browser/ua'

import isTypeof from './lang/isTypeof'
import getType from './lang/getType'
import isEmpty from './lang/isEmpty'

import clone from './object/clone'
import cloneDeep from './object/cloneDeep'
import getValue from './object/getValue'
import omit from './object/omit'

import random from './other/random'
import randomColor from './other/randomColor'
import randomKey from './other/randomKey'

import isEmail from './reg/isEmail'
import isPhone from './reg/isPhone'

const ure = {
  ua,

  getType,
  isTypeof,
  isEmpty,

  clone,
  cloneDeep,
  getValue,
  omit,

  random,
  randomColor,
  randomKey,

  isEmail,
  isPhone
}

export default ure