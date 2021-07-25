import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'
import { Text } from '../../atoms'

import { ListContainer } from './styles'
import { theme } from '../../../styles'

type HomeListProps = {
  data: {
    id: string
    image_url: string
  }[]
  title: string
}

const HomeList = ({ data, title }: HomeListProps) => {
  return (
    <ListContainer>
      <Text fontFamily="black" size={18} ml={24}>
        {title}
      </Text>

      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingLeft: theme.metrics.px(24),
          paddingTop: theme.metrics.px(12),
          paddingBottom: theme.metrics.px(24),
        }}
        showsHorizontalScrollIndicator={false}
      />
    </ListContainer>
  )
}

export { HomeList }
