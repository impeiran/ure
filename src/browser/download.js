/**
 * 下载Url链接的资源
 * @param {Object | String} option 配置项或者url
 */
const download = (option) => {
  if (!option) return false;

  const defaultOption = {
    name: true,
    open: false
  }

  if (typeof option === 'string') {
    option = {...defaultOption, url: option};
  } else {
    option = {...defaultOption, ...option};
  }

  if (!option.url) return false;

  const a = document.createElement('a');
  a.setAttribute('href', option.url);
  a.setAttribute('target', option.open ? '_blank' : '_self');
  a.setAttribute('download', option.name);
  a.style.display = 'none';

  document.body.append(a);

  a.click();

  document.body.removeChild(a);
}

export default download