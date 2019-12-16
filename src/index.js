import ua from './browser/ua'

import isTypeof from './lang/isTypeof'
import isEmpty from './lang/isEmpty'

import getValue from './object/getValue'

import isEmail from './reg/isEmail'
import isPhone from './reg/isPhone'

const faa = {
  ua,

  isEmpty,
  isTypeof,

  getValue,

  isEmail,
  isPhone
}

export default faa