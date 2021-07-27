import styled from 'styled-components/native'

type VideoContainerProps = {
  height: number
}

const VideoContainer = styled.View<VideoContainerProps>`
  width: 100%;
  height: ${({ height, theme }) => theme.metrics.px(height)}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export { VideoContainer }
