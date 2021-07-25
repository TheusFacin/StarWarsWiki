import React from 'react'
import { GestureResponderEvent } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { FeatherIconsNames } from '../../../@types/featherIconsNames'
import { Text } from '../../atoms'

import { ButtonContainer } from './styles'
import { theme } from '../../../styles'

type IconButtonProps = {
  iconName: FeatherIconsNames
  label: string
  onPress: (event: GestureResponderEvent) => void
}

const IconButton = ({ iconName, label, onPress }: IconButtonProps) => {
  return (
    <ButtonContainer activeOpacity={0.8} onPress={onPress}>
      <Feather
        name={iconName}
        size={theme.metrics.px(24)}
        color={theme.colors.white}
      />
      <Text fontFamily="semiBold" size={10} mt={6}>
        {label}
      </Text>
    </ButtonContainer>
  )
}

export { IconButton }
