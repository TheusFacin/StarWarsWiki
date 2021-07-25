import React from 'react'
import { useDataStore } from '../../services/stores'

import { ScreenScrollContainer, Hero } from '../../components'

const Detail = () => {
  const { selectedData } = useDataStore()

  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} />
    </ScreenScrollContainer>
  )
}

export { Detail }
