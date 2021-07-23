import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { Logo, Text } from '../../components'

import { styles } from './styles'

const Splash = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Logo />
      <Text color={'red'}>StarWars Wiki</Text>
    </View>
  )
}

export { Splash }
