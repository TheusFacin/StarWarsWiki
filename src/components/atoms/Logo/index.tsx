import React from 'react'

import { LogoImg } from './styles'

import logoImg from '../../../assets/LogoEmpire.png'

type LogoProps = {
  size?: 'large' | 'small'
}

const sizes = {
  small: 28,
  large: 64,
}

const Logo = ({ size }: LogoProps) => {
  return <LogoImg source={logoImg} size={sizes[size || 'large']} />
}

export { Logo }
