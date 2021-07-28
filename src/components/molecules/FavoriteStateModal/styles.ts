import styled from 'styled-components/native'

const ModalContainer = styled.Modal``

const ModalBackgroundContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.transparentDark};
`

const ModalContentContainer = styled.View`
  height: ${({ theme }) => theme.metrics.px(320)}px;
  width: ${({ theme }) => theme.metrics.px(320)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.metrics.px(24)}px;
  padding: ${({ theme }) => theme.metrics.px(12)}px;
`

const ModalImage = styled.Image`
  width: ${({ theme }) => theme.metrics.px(80)}px;
  height: ${({ theme }) => theme.metrics.px(80)}px;
`

export {
  ModalContainer,
  ModalBackgroundContainer,
  ModalContentContainer,
  ModalImage,
}
