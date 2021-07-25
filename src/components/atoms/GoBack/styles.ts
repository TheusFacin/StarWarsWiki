import styled from 'styled-components/native'
import Constants from 'expo-constants'

const GoBackContainer = styled.TouchableOpacity`
  position: absolute;
  top: ${({ theme }) => Constants.statusBarHeight + theme.metrics.px(12)}px;
  left: ${({ theme }) => theme.metrics.px(12)}px;
  padding: ${({ theme }) => theme.metrics.px(12)}px;
`

export { GoBackContainer }
