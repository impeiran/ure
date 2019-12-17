/**
 * 生成随机hash颜色值
 */
const randomColor = () => {
  return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6);
};

export default randomColor