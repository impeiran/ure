const isIE = (): boolean => {
  return !!window.ActiveXObject || 'ActiveXObject' in window
}

export default isIE
