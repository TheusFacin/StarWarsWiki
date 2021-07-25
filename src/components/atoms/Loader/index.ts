import styled from 'styled-components/native'
import { theme } from '../../../styles'

const Loader = styled.ActivityIndicator.attrs({
  size: 'large',
  color: theme.colors.red,
})``

export { Loader }
