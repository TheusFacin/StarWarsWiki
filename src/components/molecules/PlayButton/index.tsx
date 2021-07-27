import React from 'react'
import { GestureResponderEvent } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Text } from '../../atoms'

import { ButtonContainer } from './styles'
import { theme } from '../../../styles'

type PlayButtonProps = {
  onPress?: (event: GestureResponderEvent) => void
}

const PlayButton = ({ onPress }: PlayButtonProps) => {
  return (
    <ButtonContainer activeOpacity={0.8} onPress={onPress}>
      <Feather name="play" size={12} color={theme.colors.dark} />
      <Text fontFamily="bold" size={14} color="dark" ml={8} mt={2}>
        Assistir
      </Text>
    </ButtonContainer>
  )
}

export { PlayButton }
