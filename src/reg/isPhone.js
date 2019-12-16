const isMob = /^1[3|4|5|7|8][0-9]{9}$/;
const isTel = /^([0-9]{3,4}-)?[0-9]{7,8}$/;

/**
 * 校验电话号码
 * @param {String} target 
 */
const isPhone = target => {
  return isTel.test(target) || isMob.test(target);
}

export default isPhone