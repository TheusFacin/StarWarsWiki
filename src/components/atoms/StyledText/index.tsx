import React, { ReactNode } from 'react'

import { StyledText } from './styles'

type TextProps = {
  children: ReactNode
  color?: string
}

const Text = ({ children, color = '#fff' }: TextProps) => {
  return <StyledText color={color}>{children}</StyledText>
}

export { Text, TextProps }
