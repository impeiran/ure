/**
 * open page by tag link
 * @param url 
 * @param attributes 
 * @returns 
 */
const openByTagLink = (url: string, attributes?: Partial<HTMLLinkElement>): void => {
  if (!url) return
  const element = document.createElement('a')

  element.href = url
  element.target = '_blank'

  typeof attributes === 'object' && Object.keys(attributes).forEach(attrKey => {
    element[attrKey] = attributes[attrKey]
  })
  
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

export default openByTagLink
