import styled from 'styled-components/native'
import { TextInput as ReactInput } from 'react-native'

const InputContainer = styled.View`
  width: ${({ theme }) => theme.metrics.px(327)}px;
  height: ${({ theme }) => theme.metrics.px(42)}px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border: ${({ theme }) => theme.metrics.px(1)}px solid
    ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.metrics.px(12)}px;
  padding: ${({ theme }) => theme.metrics.px(6)}px;
`

const TextInput = styled(ReactInput)`
  height: 100%;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.white};
`

export { InputContainer, TextInput }
