import api from '../config/api'
import IPersonData from '../types/Person'

const list = () => {
  return api.get<IPersonData>('person')
}

const store = (data: any) => {
  return api.post<IPersonData>('person')
}

const get = (id: number) => {}

const PersonService = {
  list,
  store,
}

export default PersonService
