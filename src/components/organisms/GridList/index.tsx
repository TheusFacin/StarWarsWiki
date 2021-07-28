import React from 'react'
import { FlatList } from 'react-native'
import { ItemData } from '../../../@types/ItemDataType'

import { Text, Container } from '../../atoms'
import { Card } from '../../molecules'
import { NoDataImage } from './styles'

import StormTrooperImg from '../../../assets/StormTrooper.png'
import KyloImg from '../../../assets/Kylo.png'

type GridListProps = {
  data: ItemData[]
  noDataText: string
  type: 'StormTrooper' | 'Kylo'
}

const GridList = ({ data, noDataText, type }: GridListProps) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Card item={item} size="large" withMargin />}
      keyExtractor={item => item.id}
      numColumns={3}
      contentContainerStyle={!data.length ? { height: '100%' } : {}}
      style={{ width: '100%' }}
      ListEmptyComponent={() => (
        <Container align="center" justify="center">
          <NoDataImage
            source={type === 'StormTrooper' ? StormTrooperImg : KyloImg}
            resizeMode="contain"
          />
          <Text fontFamily="semiBold" size={14}>
            {noDataText || 'Nenhum Dado Encontrado'}
          </Text>
        </Container>
      )}
    />
  )
}

export { GridList }
