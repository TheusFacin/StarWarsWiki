import React from 'react'
import { TextInputProps } from 'react-native'

import { InputContainer, TextInput } from './styles'
import { theme } from '../../../styles'

const Input = (props: TextInputProps) => {
  return (
    <InputContainer>
      <TextInput placeholderTextColor={theme.colors.white} {...props} />
    </InputContainer>
  )
}

export { Input }
