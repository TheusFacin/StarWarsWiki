import React, { useEffect } from 'react'

import { Logo, Text, Container } from '../../components'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../routes'

type SplashNavigationProps = StackNavigationProp<StackParamList, 'Splash'>

type SplashProps = {
  navigation: SplashNavigationProps
}

const Splash = ({ navigation }: SplashProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 200)
  }, [navigation])

  return (
    <Container justify="center" align="center">
      <Logo />
      <Text>StarWars Wiki</Text>
    </Container>
  )
}

export { Splash }
