import React from 'react'

import { Container, Hero, HomeList } from '../../components'

const Home = () => {
  return (
    <Container align="flex-start" justify="flex-start">
      <Hero />
      <HomeList />
    </Container>
  )
}

export { Home }
