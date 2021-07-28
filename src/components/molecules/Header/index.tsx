import React from 'react'
import { Logo, Text } from '../../atoms'

import { HeaderContainer } from './styles'

type HeaderProps = {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Logo size="small" />
      <Text size={28} mb={24} ml={12} fontFamily="bold">
        {title}
      </Text>
    </HeaderContainer>
  )
}

export { Header }
