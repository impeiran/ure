/**
 * 下载Url链接的资源
 * @param {Object | String} option 配置项或者url
 */
const download = (option) => {
  if (!option) return false;

  const defaultOption = {
    method: 'get',
    name: ''
  };

  if (typeof option === 'string') {
    option = { ...defaultOption, url: option };
  } else {
    option = { ...defaultOption, ...option };
  }

  if (!option.url) return false;

  const _createElement = (tagName, attrs) => {
    const el = document.createElement(tagName);
    Object.keys(attrs).forEach(key => {
      el.setAttribute(key, attrs[key]);
    });
    return el;
  }

  const _action = (el, trigger) => {
    document.body.appendChild(el);
    trigger();
    document.body.removeChild(el);
  };

  const method = option.method ? option.method.toLowerCase() : '';

  if (method === 'get') {
    const a = _createElement('a', {
      href: option.url,
      download: option.name,
      target: '_blank',
      style: 'display:none;'
    });

    _action(a, () => a.click());
  } else if (method === 'post') {
    const form = _createElement('form', {
      method,
      action: option.url,
      target: '_blank'
    });

    Object.keys(option.data || {}).forEach(key => {
      form.appendChild(_createElement('input', {
        type: 'hidden',
        name: key,
        value: option.data[key]
      }));
    });

    _action(form, () => form.submit());
  }
}

export default download