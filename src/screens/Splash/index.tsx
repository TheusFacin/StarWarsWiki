import React from 'react'
import { View, Image, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import logoImg from '../../assets/LogoEmpire.png'

import { styles } from './styles'

const Splash = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={logoImg} style={styles.logo} />
      <Text style={styles.titleText}>StarWars Wiki</Text>
    </View>
  )
}

export { Splash }
