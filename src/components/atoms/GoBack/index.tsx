import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../../routes'

import { GoBackContainer } from './styles'
import { theme } from '../../../styles'

type GoBackNavigationProps = StackNavigationProp<StackParamList, 'Detail'>

const GoBack = () => {
  const navigation = useNavigation<GoBackNavigationProps>()

  return (
    <GoBackContainer activeOpacity={0.8} onPress={() => navigation.goBack()}>
      <Feather
        name="arrow-left"
        color={theme.colors.white}
        size={theme.metrics.px(28)}
      />
    </GoBackContainer>
  )
}

export { GoBack }
