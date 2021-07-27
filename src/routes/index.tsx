import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'

import { Splash, Detail, Watch } from '../screens'
import { theme } from '../styles'
import { TabRoutes } from './tabRoutes'

type StackParamList = {
  Splash: undefined
  App: undefined
  Detail: undefined
  Watch: undefined
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
        <Stack.Screen name="App" component={TabRoutes} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen
          name="Watch"
          component={Watch}
          options={{
            // this is for video player not crash
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { Routes, StackParamList }
