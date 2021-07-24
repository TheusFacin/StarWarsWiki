import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Home, Splash } from '../screens'

type StackParamList = {
  Splash: undefined
  Home: undefined
}

const Routes = () => {
  const Stack = createStackNavigator<StackParamList>()

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { Routes, StackParamList }
