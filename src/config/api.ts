import axios from 'axios'

const apiURL = 'http://127.0.0.1:8000/api/'

const api = axios.create({
  baseURL: apiURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

export default api
