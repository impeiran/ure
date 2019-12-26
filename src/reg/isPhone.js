const isTel = val => /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(val);
const isMob = val => /^((\+86)|(86)\s)?(1)\d{10}$/.test(val) || /^0[0-9-]{10,13}$/.test(val);

/**
 * 校验电话号码
 * @param {String} target 
 */
const isPhone = target => {
  return isTel(target) || isMob(target);
};

export default isPhone