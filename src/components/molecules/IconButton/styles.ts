import styled from 'styled-components/native'

type ButtonProps = {
  disabled: boolean
}

const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`

export { ButtonContainer }
