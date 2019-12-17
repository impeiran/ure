/**
 * ua信息
 */
const ua = () => {
  return navigator
    ? navigator.userAgent
    : null;
};

export default ua