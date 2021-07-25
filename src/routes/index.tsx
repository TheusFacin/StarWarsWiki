import React from 'react'
import { Feather } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Splash, Home, Detail, Search, Favorites } from '../screens'
import { theme } from '../styles'

type StackParamList = {
  Splash: undefined
  App: undefined
  Detail: undefined
}

type TabParamList = {
  Home: undefined
  Search: undefined
  Favorites: undefined
}

const routeIcons: {
  Home: 'home'
  Search: 'search'
  Favorites: 'star'
} = {
  Home: 'home',
  Search: 'search',
  Favorites: 'star',
}

const TabRoutes = () => {
  const Tab = createBottomTabNavigator<TabParamList>()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => (
          <Feather name={routeIcons[route.name]} size={size} color={color} />
        ),
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.red,
        inactiveTintColor: theme.colors.white,
        tabStyle: {
          backgroundColor: theme.colors.black,
        },
      }}
    >
      <Tab.Screen
        options={{ tabBarLabel: 'Home' }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{ tabBarLabel: 'Pesquisar' }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{ tabBarLabel: 'Favoritos' }}
        name="Favorites"
        component={Favorites}
      />
    </Tab.Navigator>
  )
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { Routes, StackParamList }
