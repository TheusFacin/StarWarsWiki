import styled from 'styled-components/native'
import { TextProps } from '.'

const StyledText = styled.Text<TextProps>`
  color: ${({ color }) => color || 'white'};
  font-weight: bold;
  font-size: 24px;
  margin-top: 12px;
`

export { StyledText }
