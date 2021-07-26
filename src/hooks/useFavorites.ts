import AsyncStorage from '@react-native-async-storage/async-storage'
import { ItemData } from '../@types/ItemDataType'

const DB_KEY = '@StarWarsWiki:favorites'

const useFavorites = () => {
  const addFavorite = async (data: ItemData) => {
    try {
      const value = await AsyncStorage.getItem(DB_KEY)

      let database: ItemData[]

      if (value) database = [...JSON.parse(value), data]
      else database = [data]

      const jsonValue = JSON.stringify(database)
      await AsyncStorage.setItem(DB_KEY, jsonValue)

      return database
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  const getFavorites = async () => {
    const value = await AsyncStorage.getItem(DB_KEY)

    return value ? JSON.parse(value) : []
  }

  const removeFavorite = async (data: ItemData) => {
    try {
      const value = await AsyncStorage.getItem(DB_KEY)

      let database: ItemData[]

      if (value) {
        const databaseItems: ItemData[] = JSON.parse(value)
        database = databaseItems.filter(
          item => !(item.title === data.title && item.id === data.id)
        )
      } else database = []

      const jsonValue = JSON.stringify(database)
      await AsyncStorage.setItem(DB_KEY, jsonValue)

      return database
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  return {
    addFavorite,
    getFavorites,
    removeFavorite,
  }
}

export { useFavorites }
