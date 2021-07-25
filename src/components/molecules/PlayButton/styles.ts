import styled from 'styled-components/native'

const ButtonContainer = styled.TouchableOpacity`
  width: ${({ theme }) => theme.metrics.px(100)}px;
  height: ${({ theme }) => theme.metrics.px(36)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
`

export { ButtonContainer }
