import React from 'react'
import { theme } from '../../../styles'
import { Text, Logo } from '../../atoms'
import { IconButton, Tag, PlayButton } from '../../molecules'

import {
  ButtonsView,
  HeroContainer,
  HeroGradient,
  HeroImageBackground,
} from './styles'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: 'https://img.elo7.com.br/product/zoom/2C25A3B/big-poster-filme-star-wars-a-ameaca-fantasma-lo01-90x60-cm-poster-de-filme.jpg',
        }}
      >
        <HeroGradient
          colors={[theme.colors.dark, 'transparent', theme.colors.dark]}
        >
          <Logo size="small" />

          <Tag mt={200}>Filme</Tag>
          <Text fontFamily="bold" size={28} mt={8}>
            Episódio I
          </Text>
          <Text size={18}>A Ameaça Fantasma</Text>

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
