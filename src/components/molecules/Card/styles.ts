import styled from 'styled-components/native'

type CardContainerProps = {
  size: {
    h: number
    w: number
  }
  withMargin: boolean
}

const CardContainer = styled.TouchableOpacity<CardContainerProps>`
  width: ${({ size, theme }) => theme.metrics.px(size.w)}px;
  height: ${({ size, theme }) => theme.metrics.px(size.h)}px;
  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
  overflow: hidden;
  margin-right: ${({ theme }) => theme.metrics.px(12)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(12)}px;
`

const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`

export { CardContainer, CardImage }
