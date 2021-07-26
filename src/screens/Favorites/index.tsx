import React, { useEffect, useState } from 'react'
import { useFavorites } from '../../hooks'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { ItemData } from '../../@types/ItemDataType'
import { TabParamList } from '../../routes/tabRoutes'

import { Card, ScreenScrollContainer, Text } from '../../components'

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
    <ScreenScrollContainer withPadding>
      <Text size={28} fontFamily="bold">
        Favoritos
      </Text>

      {favorites.map(item => (
        <Card item={item} key={item.id} />
      ))}
    </ScreenScrollContainer>
  )
}

export { Favorites }
