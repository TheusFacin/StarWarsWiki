import React, { ReactNode } from 'react'
import { Text } from '../../atoms'

import { TagContainer } from './styles'

type TagProps = {
  children: ReactNode
  mt?: number
  mb?: number
  ml?: number
  mr?: number
}

const Tag = ({ children, ...props }: TagProps) => {
  return (
    <TagContainer {...props}>
      <Text fontFamily="bold" size={14}>
        {children}
      </Text>
    </TagContainer>
  )
}

export { Tag, TagProps }
