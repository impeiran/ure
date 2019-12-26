const isMob = val => /^1[3|4|5|7|8][0-9]{9}$/.test(val);
const isTel = val => /^((\+86)|(86)\s)?(1)\d{10}$/.test(val) || /^0[0-9-]{10,13}$/.test(val);

/**
 * 校验电话号码
 * @param {String} target 
 */
const isPhone = target => {
  return isTel(target) || isMob(target);
};

export default isPhone