import React from 'react'
import { useDataStore } from '../../services/stores'

import { ScreenScrollContainer, Hero, GoBack, Text } from '../../components'

const Detail = () => {
  const { selectedData } = useDataStore()

  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} onDetail />

      <Text ml={24} fontFamily="black" size={18}>
        Descrição
      </Text>

      <Text
        ml={24}
        mr={24}
        mt={12}
        mb={24}
        fontFamily="regular"
        size={14}
        lh={20}
      >
        {selectedData.description}
      </Text>

      <GoBack />
    </ScreenScrollContainer>
  )
}

export { Detail }
