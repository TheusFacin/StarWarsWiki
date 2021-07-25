import React from 'react'
import { theme } from '../../../styles'
import { Text, Logo } from '../../atoms'
import { ItemData } from '../../../@types/ItemDataType'
import { IconButton, Tag, PlayButton } from '../../molecules'

import {
  ButtonsView,
  HeroContainer,
  HeroGradient,
  HeroImageBackground,
} from './styles'

type HeroProps = {
  item: ItemData
}

const Hero = ({ item: { image_url, title, subtitle, type } }: HeroProps) => {
  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: image_url,
        }}
      >
        <HeroGradient
          colors={[theme.colors.dark, 'transparent', theme.colors.dark]}
        >
          <Logo size="small" />

          <Tag mt={200}>{type}</Tag>
          <Text fontFamily="bold" size={28} mt={8}>
            {title}
          </Text>
          <Text size={18}>{subtitle}</Text>

          <ButtonsView>
            <IconButton label="Favoritos" iconName="star" onPress={() => {}} />
            <PlayButton />
            <IconButton label="Saiba mais" iconName="info" onPress={() => {}} />
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}

export { Hero }
