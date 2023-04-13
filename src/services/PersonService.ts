import api from '../config/api'
import IPersonData from '../types/Person'

const list = () => {
  return api.get<IPersonData>('person')
}

const get = (id: number) => {}

const PersonService = {
  list,
}

export default PersonService
