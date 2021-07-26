import styled from 'styled-components/native'
import { Colors } from '../../../styles/colors'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

type ContainerProps = {
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
  align?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'
  justify?:
    | 'baseline'
    | 'center'
    | 'end'
    | 'first baseline'
    | 'flex-end'
    | 'flex-start'
    | 'last baseline'
    | 'left'
    | 'right'
    | 'safe'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'start'
    | 'stretch'
    | 'unsafe'
  bg?: Colors
  w?: number
  h?: number
}

type ScreenScrollContainerProps = {
  bg?: Colors
  withPadding?: boolean
}

const Container = styled.View<ContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  background-color: ${({ bg, theme }) => theme.colors[bg || 'dark']};
  width: ${({ w, theme }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
  height: ${({ h, theme }) => (h ? `${theme.metrics.px(h)}px` : '100%')};
`

const ScreenScrollContainer = styled.ScrollView.attrs<ScreenScrollContainerProps>(
  ({ theme, withPadding }) => ({
    contentContainerStyle: withPadding
      ? {
          paddingHorizontal: theme.metrics.px(24),
          paddingTop: getStatusBarHeight() + theme.metrics.px(24),
        }
      : {},
  })
)<ScreenScrollContainerProps>`
  background-color: ${({ bg, theme }) => theme.colors[bg || 'dark']};
`

export { Container, ScreenScrollContainer }
