import React, { useEffect, useState } from 'react'
import { useFavorites } from '../../hooks'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { ItemData } from '../../@types/ItemDataType'
import { TabParamList } from '../../routes/tabRoutes'

import { GridList, Container, Header } from '../../components'

type FavoritesNavigationProps = BottomTabNavigationProp<
  TabParamList,
  'Favorites'
>

type FavoritesProps = {
  navigation: FavoritesNavigationProps
}

const Favorites = ({ navigation }: FavoritesProps) => {
  const [favorites, setFavorites] = useState<ItemData[]>([])
  const { getFavorites } = useFavorites()

  const callGetFavorites = async () => {
    const database = await getFavorites()
    setFavorites(database)
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', callGetFavorites)

    return unsubscribe
  }, [])

  return (
    <Container withPadding>
      <Header title="Favoritos" />

      <GridList
        data={favorites}
        noDataText="Nenhum Favorito Adicionado"
        type="Kylo"
      />
    </Container>
  )
}

export { Favorites }
