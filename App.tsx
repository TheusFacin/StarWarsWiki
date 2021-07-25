import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
  SourceSansPro_900Black,
} from '@expo-google-fonts/source-sans-pro'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/styles'

import { Routes } from './src/routes'

const App = () => {
  const [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
    SourceSansPro_900Black,
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0.05)"
        style="light"
      />
      <Routes />
    </ThemeProvider>
  )
}

export default App
