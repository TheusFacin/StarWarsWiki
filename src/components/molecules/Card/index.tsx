import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../../routes'
import { useDataStore } from '../../../services/stores'
import { ItemData } from '../../../@types/ItemDataType'

import { CardContainer, CardImage } from './styles'

type CardProps = {
  item: ItemData
}

type CardNavigationProps = StackNavigationProp<StackParamList, 'Home'>

const Card = ({ item }: CardProps) => {
  const { setSelectedData } = useDataStore()
  const navigation = useNavigation<CardNavigationProps>()

  const onSelectItem = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }

  return (
    <CardContainer activeOpacity={0.8} onPress={onSelectItem}>
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  )
}

export { Card }
