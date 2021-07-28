import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../../routes'
import { useDataStore } from '../../../services/stores'
import { ItemData } from '../../../@types/ItemDataType'

import { CardContainer, CardImage } from './styles'

const SIZES = {
  small: { h: 124, w: 88 },
  large: { h: 150, w: 102 },
}

type CardProps = {
  item: ItemData
  size?: 'small' | 'large'
  withMargin?: boolean
}

type CardNavigationProps = StackNavigationProp<StackParamList, 'App'>

const Card = ({ item, size, withMargin = false }: CardProps) => {
  const { setSelectedData } = useDataStore()
  const navigation = useNavigation<CardNavigationProps>()

  const onSelectItem = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }

  return (
    <CardContainer
      activeOpacity={0.8}
      size={size ? SIZES[size] : SIZES.small}
      onPress={onSelectItem}
      withMargin={withMargin}
    >
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  )
}

export { Card }
