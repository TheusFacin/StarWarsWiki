import React from 'react'
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

import { Splash } from './src/screens/Splash'

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
      <Splash />
    </ThemeProvider>
  )
}

export default App
