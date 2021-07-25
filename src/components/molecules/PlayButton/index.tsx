import React from 'react'
import { Feather } from '@expo/vector-icons'
import { Text } from '../../atoms'

import { ButtonContainer } from './styles'
import { theme } from '../../../styles'

const PlayButton = () => {
  return (
    <ButtonContainer activeOpacity={0.8}>
      <Feather name="play" size={12} color={theme.colors.dark} />
      <Text fontFamily="bold" size={14} color="dark" ml={8}>
        Assistir
      </Text>
    </ButtonContainer>
  )
}

export { PlayButton }
