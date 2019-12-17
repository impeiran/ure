import ua from './browser/ua'

import isTypeof from './lang/isTypeof'
import getType from './lang/getType'
import isEmpty from './lang/isEmpty'

import getValue from './object/getValue'

import isEmail from './reg/isEmail'
import isPhone from './reg/isPhone'

const ure = {
  ua,

  getType,
  isTypeof,
  isEmpty,

  getValue,

  isEmail,
  isPhone
}

export default ure