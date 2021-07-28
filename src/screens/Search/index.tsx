import React, { useState } from 'react'
import { useEffect } from 'react'
import { useGetData } from '../../hooks'
import { ItemData } from '../../@types/ItemDataType'

import { Container, GridList, Header, Input, Text } from '../../components'

let typeInterval: NodeJS.Timeout

const Search = () => {
  const [results, setResults] = useState<ItemData[]>([])
  const [query, setQuery] = useState('')

  const { getSearchResult } = useGetData()

  const callGetSearchResult = async () => {
    const result = await getSearchResult(query)
    setResults(result)
  }

  useEffect(() => {
    callGetSearchResult()
  }, [])

  useEffect(() => {
    clearTimeout(typeInterval)
    typeInterval = setTimeout(callGetSearchResult, 500)
  }, [query])

  const handleChangeQuery = (value: string) => {
    setQuery(value)
  }

  return (
    <Container withPadding>
      <Header title="Pesquisar" />

      <Input
        placeholder="Nome do filme ou personagem"
        value={query}
        onChangeText={handleChangeQuery}
      />

      <Text fontFamily="bold" size={18} mb={24} mt={24}>
        Resultados
      </Text>

      <GridList
        data={results}
        noDataText="Nenhum Resultado Encontrado"
        type="StormTrooper"
      />
    </Container>
  )
}

export { Search }
