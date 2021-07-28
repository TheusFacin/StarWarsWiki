import React, { ReactNode } from 'react'
import { Colors } from '../../../styles/colors'
import { Fonts } from '../../../styles/fonts'

import { StyledText } from './styles'

type TextProps = {
  children: ReactNode
  color?: Colors
  size?: number
  fontFamily?: Fonts
  mt?: number
  mb?: number
  ml?: number
  mr?: number
  lh?: number
  ta?: 'center' | 'end' | 'justify' | 'left' | 'right' | 'start'
}

const Text = ({ children, ...props }: TextProps) => (
  <StyledText {...props}>{children}</StyledText>
)

export { Text, TextProps }
