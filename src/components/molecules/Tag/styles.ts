import styled from 'styled-components/native'
import { TagProps } from '.'

const TagContainer = styled.View<TagProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.red};
  height: ${({ theme }) => theme.metrics.px(24)}px;
  padding: 0 ${({ theme }) => theme.metrics.px(6)}px;
  border-radius: ${({ theme }) => theme.metrics.px(12)}px;
  max-width: ${({ theme }) => theme.metrics.px(110)}px;
  margin-top: ${({ mt, theme }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ mb, theme }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ ml, theme }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ mr, theme }) => theme.metrics.px(mr || 0)}px;
`

export { TagContainer }
