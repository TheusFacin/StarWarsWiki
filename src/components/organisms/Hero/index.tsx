import React from 'react'
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
  const { addFavorite, getFavorites } = useFavorites()
  const navigation = useNavigation<HeroNavigationProps>()
  const { setSelectedData } = useDataStore()

  const handleAddFavorite = async () => {
    await addFavorite(item)
  }

  const handleNavigateToDetail = async () => {
    setSelectedData(item)
    navigation.navigate('Detail')
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
            <IconButton
              label="Favoritos"
              iconName="star"
              onPress={handleAddFavorite}
            />

            {!onDetail && (
              <>
                <PlayButton />
                <IconButton
                  label="Saiba mais"
                  iconName="info"
                  onPress={handleNavigateToDetail}
                />
              </>
            )}
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}

export { Hero }
