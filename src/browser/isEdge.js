import ua from './ua'

const isEdge = () => {
  return /Edge/.test(ua())
}

export default isEdge
