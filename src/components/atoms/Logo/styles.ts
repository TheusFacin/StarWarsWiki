import styled from 'styled-components/native'

type LogoImgProps = {
  size: number
}

const LogoImg = styled.Image<LogoImgProps>`
  height: ${({ size, theme }) => theme.metrics.px(size)}px;
  width: ${({ size, theme }) => theme.metrics.px(size)}px;
`

export { LogoImg }
