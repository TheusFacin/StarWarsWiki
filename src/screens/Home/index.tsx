import React, { useEffect, useState } from 'react'
import { ItemData } from '../../@types/ItemDataType'
import { useGetData } from '../../hooks'

import {
  ScreenScrollContainer,
  Hero,
  HomeList,
  Loader,
  Container,
} from '../../components'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [films, setFilms] = useState<ItemData[]>([])
  const [characters, setCharacters] = useState<ItemData[]>([])
  const { getFilms, getCharacters } = useGetData()

  const callGetData = async () => {
    const filmsResponse = await getFilms()
    const charactersResponse = await getCharacters()

    if (!filmsResponse.error && !charactersResponse.error) {
      const filmsResponseData = (filmsResponse as ItemData[]).map(item => {
        item.id = String(item.id)
        item.type = 'Filme'
        return item
      })

      const charactersResponseData = (charactersResponse as ItemData[]).map(
        item => {
          item.id = String(item.id)
          item.type = 'Personagem'
          return item
        }
      )

      setFilms(filmsResponseData)
      setCharacters(charactersResponseData)
      setLoading(false)
    }
  }

  useEffect(() => {
    callGetData()
  }, [])

  if (loading)
    return (
      <Container align="center" justify="center">
        <Loader />
      </Container>
    )

  return (
    <ScreenScrollContainer>
      <Hero item={films[0]} />
      <HomeList title="Filmes" data={films} />
      <HomeList title="Personagens" data={characters} />
    </ScreenScrollContainer>
  )
}

export { Home }
