const isIE = () => {
  return !!window.ActiveXObject || 'ActiveXObject' in window
}

export default isIE
