import { api } from '../services/api'

const useGetData = () => {
  const getFilms = async () => {
    try {
      const response = await api.get('/films')
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  const getCharacters = async () => {
    try {
      const response = await api.get('/characters')
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  return {
    getFilms,
    getCharacters,
  }
}

export { useGetData }
