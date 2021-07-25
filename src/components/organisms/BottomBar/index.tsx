import React from 'react'
import { Feather } from '@expo/vector-icons'
import { TabNavigationState } from '@react-navigation/routers'
import { NavigationHelpers, ParamListBase } from '@react-navigation/native'
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types'
import { TabParamList } from '../../../routes/tabRoutes'

import { Text } from '../../atoms'
import { BarItem, BottomBarContainer } from './styles'
import { theme } from '../../../styles'

type BottomBarProps = {
  state: TabNavigationState<TabParamList>
  descriptors: BottomTabDescriptorMap
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
}

type Routes = {
  Home: 'home'
  Search: 'search'
  Favorites: 'star'
}

const routeIcons: Routes = {
  Home: 'home',
  Search: 'search',
  Favorites: 'star',
}

const BottomBar = ({ state, descriptors, navigation }: BottomBarProps) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <BottomBarContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <BarItem
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            activeOpacity={0.8}
          >
            <Feather
              name={routeIcons[route.name as keyof Routes]}
              size={theme.metrics.px(20)}
              color={isFocused ? theme.colors.red : theme.colors.white}
            />
            <Text
              fontFamily="semiBold"
              size={10}
              color={isFocused ? 'red' : 'white'}
              mt={4}
            >
              {label}
            </Text>
          </BarItem>
        )
      })}
    </BottomBarContainer>
  )
}

export { BottomBar }
