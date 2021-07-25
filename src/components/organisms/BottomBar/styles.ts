import styled from 'styled-components/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

const BottomBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: ${({ theme }) => getBottomSpace() + theme.metrics.px(56)}px;
  background-color: ${({ theme }) => theme.colors.black};
`

const BarItem = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export { BottomBarContainer, BarItem }
