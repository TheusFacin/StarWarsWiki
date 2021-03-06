import styled from 'styled-components/native'
import Constants from 'expo-constants'
import { LinearGradient } from 'expo-linear-gradient'

type ButtonItemViewProps = {
  align?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'
}

const HeroContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(460)}px;
`

const HeroImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`

const HeroGradient = styled(LinearGradient)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => Constants.statusBarHeight + theme.metrics.px(24)}px
    ${({ theme }) => theme.metrics.px(24)}px;
`

const ButtonsView = styled.View`
  width: 100%;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`

const ButtonItemView = styled.View<ButtonItemViewProps>`
  flex: 1;
  flex-direction: column;
  align-items: ${({ align }) => align || 'center'};
`

export {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  ButtonsView,
  ButtonItemView,
}
