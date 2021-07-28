import styled from 'styled-components/native'

const NoDataImage = styled.Image`
  width: ${({ theme }) => theme.metrics.px(48)}px;
  height: ${({ theme }) => theme.metrics.px(48)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(12)}px;
`

export { NoDataImage }
