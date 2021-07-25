import axios from 'axios'

const api = axios.create({
  baseURL: 'https://sevencoders-starwars-wiki.herokuapp.com',
})

export { api }
