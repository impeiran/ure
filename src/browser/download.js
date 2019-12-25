/**
 * 下载Url链接的资源
 * @param {Object | String} option 配置项或者url
 */
const download = (option) => {
  if (!option) return false;

  let defaultOption = {
    name: true,
    open: false
  }

  if (typeof option === 'string') {
    option = Object.assign(defaultOption, { url: option })
  } else {
    option = Object.assign(defaultOption, option)
  }

  if (!option.url) return false;

  const a = document.createElement('a');
  a.setAttribute('href', option.url);
  a.setAttribute('target', option.open ? '_blank' : '_self');
  a.setAttribute('download', option.name);
  a.style.display = 'none';

  document.body.append(a);

  console.log(a)

  a.click();

  document.body.removeChild(a);
}

export default download