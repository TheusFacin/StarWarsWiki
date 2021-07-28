import React from 'react'
import { Text } from '../../atoms'

import {
  ModalContainer,
  ModalBackgroundContainer,
  ModalContentContainer,
  ModalImage,
} from './styles'

import DarthVaderImg from '../../../assets/DarthVader.png'
import DeathStarImg from '../../../assets/DeathStar.png'

type FavoriteStateModalProps = {
  visible: boolean
  onClose: () => void
  type: 'added' | 'removed'
}

const FavoriteStateModal = ({
  visible,
  onClose,
  type,
}: FavoriteStateModalProps) => {
  return (
    <ModalContainer
      visible={visible}
      transparent
      onRequestClose={onClose}
      animationType="fade"
    >
      <ModalBackgroundContainer>
        <ModalContentContainer>
          <ModalImage
            source={type === 'added' ? DeathStarImg : DarthVaderImg}
          />
          <Text size={28} fontFamily="bold" mt={34} ta="center">
            Favorito {type === 'added' ? 'Adicionado' : 'Removido'} com Sucesso!
          </Text>
        </ModalContentContainer>
      </ModalBackgroundContainer>
    </ModalContainer>
  )
}

export { FavoriteStateModal }
