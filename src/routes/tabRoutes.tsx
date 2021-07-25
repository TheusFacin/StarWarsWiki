import React from 'react'
import { ParamListBase } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BottomBar } from '../components'
import { Home, Search, Favorites } from '../screens'

type TabParamList = ParamListBase & {
  Home: undefined
  Search: undefined
  Favorites: undefined
}

const TabRoutes = () => {
  const Tab = createBottomTabNavigator<TabParamList>()

  return (
    <Tab.Navigator
      tabBar={({ state, descriptors, navigation }) => (
        <BottomBar
          state={state}
          descriptors={descriptors}
          navigation={navigation}
        />
      )}
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

export { TabRoutes, TabParamList }
