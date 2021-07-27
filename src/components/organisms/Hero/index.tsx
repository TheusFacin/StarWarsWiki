import React, { useEffect, useState } from 'react'
import { useFavorites } from '../../../hooks'
import { useNavigation } from '@react-navigation/native'
import { useDataStore } from '../../../services/stores'
import { theme } from '../../../styles'
import { Text, Logo } from '../../atoms'
import { ItemData } from '../../../@types/ItemDataType'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../../routes'
import { IconButton, Tag, PlayButton } from '../../molecules'

import {
  ButtonItemView,
  ButtonsView,
  HeroContainer,
  HeroGradient,
  HeroImageBackground,
} from './styles'

type HeroProps = {
  item: ItemData
  onDetail?: boolean
}

type HeroNavigationProps = StackNavigationProp<StackParamList>

const Hero = ({ item, onDetail }: HeroProps) => {
  const [loading, setLoading] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)

  const navigation = useNavigation<HeroNavigationProps>()
  const { addFavorite, getFavorites, removeFavorite } = useFavorites()
  const { setSelectedData } = useDataStore()

  const checkIsFavorite = async () => {
    setLoading(true)

    const favorites: ItemData[] = await getFavorites()
    const isInFavoritesList = favorites.some(
      favorite => favorite.id === item.id && favorite.title === item.title
    )

    setIsFavorite(isInFavoritesList)
    setLoading(false)
  }

  useEffect(() => {
    checkIsFavorite()
  }, [])

  const handleRemoveFavorite = async () => {
    setLoading(true)
    await removeFavorite(item)
    setLoading(false)
    await checkIsFavorite()
  }

  const handleAddFavorite = async () => {
    setLoading(true)
    await addFavorite(item)
    setLoading(false)
    await checkIsFavorite()
  }

  const handleNavigateToDetail = async () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }

  const handlePlay = () => {
    setSelectedData(item)
    navigation.navigate('Watch')
  }

  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: item.image_url,
        }}
      >
        <HeroGradient
          colors={[theme.colors.dark, 'transparent', theme.colors.dark]}
        >
          {!onDetail && <Logo size="small" />}

          <Tag mt={onDetail ? 224 : 200}>{item.type}</Tag>
          <Text fontFamily="bold" size={28} mt={8}>
            {item.title}
          </Text>
          <Text size={18}>{item.subtitle}</Text>

          <ButtonsView>
            <ButtonItemView align="flex-start">
              <IconButton
                label="Favoritos"
                iconName={isFavorite ? 'minus-circle' : 'plus-circle'}
                onPress={isFavorite ? handleRemoveFavorite : handleAddFavorite}
                disabled={loading}
              />
            </ButtonItemView>

            <ButtonItemView>
              {item.type === 'Filme' && <PlayButton onPress={handlePlay} />}
            </ButtonItemView>

            <ButtonItemView align="flex-end">
              {!onDetail && (
                <IconButton
                  label="Saiba mais"
                  iconName="info"
                  onPress={handleNavigateToDetail}
                />
              )}
            </ButtonItemView>
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}

export { Hero }
