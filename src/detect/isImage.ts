/**
 * 判断是否图片
 * @param {String} target
 */
const isImage = (target: string): boolean => /\.(jpeg|jpg|png|bmp|gif|wbmp|svg)(\?[\s\S]+)?$/i.test(target)

export default isImage
