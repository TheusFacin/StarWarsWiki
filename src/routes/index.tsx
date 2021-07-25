import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Home, Splash, Detail } from '../screens'
import { theme } from '../styles'

type StackParamList = {
  Splash: undefined
  Home: undefined
  Detail: undefined
}

const Routes = () => {
  const Stack = createStackNavigator<StackParamList>()

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{ cardStyle: { backgroundColor: theme.colors.dark } }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { Routes, StackParamList }
