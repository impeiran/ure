/**
 * 获取url的参数
 * @param {String} url
 * @param {String} key
 * From https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
 */
const getUrlParam = (
  url: string | undefined,
  key: string | undefined
): string | null => {
  if (!url || !key) return null;

  // eslint-disable-next-line no-useless-escape
  key = key.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + key + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

export default getUrlParam;
