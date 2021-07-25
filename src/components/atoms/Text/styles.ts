import styled from 'styled-components/native'
import { TextProps } from '.'

const StyledText = styled.Text<TextProps>`
  color: ${({ color, theme }) => theme.colors[color || 'white']};
  font-size: ${({ size, theme }) => theme.metrics.px(size || 24)}px;
  font-family: ${({ fontFamily, theme }) =>
    theme.fonts[fontFamily || 'regular']};
  margin-top: ${({ mt, theme }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ mb, theme }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ ml, theme }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ mr, theme }) => theme.metrics.px(mr || 0)}px;
  line-height: ${({ lh, size, theme }) => theme.metrics.px(lh || size || 24)}px;
`

export { StyledText }
