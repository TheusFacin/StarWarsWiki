import styled from 'styled-components/native'
import { TextProps } from '.'

const StyledText = styled.Text<TextProps>`
  color: ${({ color, theme }) => color || theme.colors.white};
  font-family: 'SourceSansPro_700Bold';
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
`

export { StyledText }
