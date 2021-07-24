import React from 'react'

import { CardContainer, CardImage } from './styles'

type CardProps = {
  item: {
    id: string
    image_url: string
  }
}

const Card = ({ item }: CardProps) => {
  return (
    <CardContainer activeOpacity={0.8}>
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  )
}

export { Card }
