import ua from './ua'

const isEdge = (): boolean => {
  return /Edge/.test(ua())
}

export default isEdge
