import React from 'react'
import { ItemData } from '../../@types/ItemDataType'

import { ScreenScrollContainer, Hero, HomeList } from '../../components'

const Home = () => {
  const FAKE_DATA_CHARACTERS: ItemData[] = [
    {
      id: '0',
      image_url:
        'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
      title: 'Darth Vader',
      subtitle: 'Anakin SkyWalker',
      type: 'Personagem',
      description:
        'Darth Vader, nascido como Anakin Skywalker, é um dos personagens centrais da série de filmes Star Wars (Guerra nas Estrelas), tendo sido um dos protagonistas, juntamente com Obi-Wan Kenobi, da trilogia prequel (mas se tornando o vilão secundário no terceiro filme após a morte do General Grievous), um dos antagonistas principais da trilogia original ao lado do Imperador Palpatine (porém acaba se redimindo no final), e um anti-herói póstumo na trilogia de sequência, sendo que suas ações ainda afetam o universo de Star Wars, sendo para o bem ou para o mal, principalmente quando se trata de seu neto, Ben Solo, o Kylo Ren, que tem por Vader uma admiração cega, e deseja mais do que tudo ser como ele (e até superá-lo).',
    },
    {
      id: '1',
      image_url:
        'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
      title: 'Darth Vader',
      subtitle: 'Anakin SkyWalker',
      type: 'Personagem',
      description:
        'Darth Vader, nascido como Anakin Skywalker, é um dos personagens centrais da série de filmes Star Wars (Guerra nas Estrelas), tendo sido um dos protagonistas, juntamente com Obi-Wan Kenobi, da trilogia prequel (mas se tornando o vilão secundário no terceiro filme após a morte do General Grievous), um dos antagonistas principais da trilogia original ao lado do Imperador Palpatine (porém acaba se redimindo no final), e um anti-herói póstumo na trilogia de sequência, sendo que suas ações ainda afetam o universo de Star Wars, sendo para o bem ou para o mal, principalmente quando se trata de seu neto, Ben Solo, o Kylo Ren, que tem por Vader uma admiração cega, e deseja mais do que tudo ser como ele (e até superá-lo).',
    },
    {
      id: '2',
      image_url:
        'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
      title: 'Darth Vader',
      subtitle: 'Anakin SkyWalker',
      type: 'Personagem',
      description:
        'Darth Vader, nascido como Anakin Skywalker, é um dos personagens centrais da série de filmes Star Wars (Guerra nas Estrelas), tendo sido um dos protagonistas, juntamente com Obi-Wan Kenobi, da trilogia prequel (mas se tornando o vilão secundário no terceiro filme após a morte do General Grievous), um dos antagonistas principais da trilogia original ao lado do Imperador Palpatine (porém acaba se redimindo no final), e um anti-herói póstumo na trilogia de sequência, sendo que suas ações ainda afetam o universo de Star Wars, sendo para o bem ou para o mal, principalmente quando se trata de seu neto, Ben Solo, o Kylo Ren, que tem por Vader uma admiração cega, e deseja mais do que tudo ser como ele (e até superá-lo).',
    },
    {
      id: '3',
      image_url:
        'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
      title: 'Darth Vader',
      subtitle: 'Anakin SkyWalker',
      type: 'Personagem',
      description:
        'Darth Vader, nascido como Anakin Skywalker, é um dos personagens centrais da série de filmes Star Wars (Guerra nas Estrelas), tendo sido um dos protagonistas, juntamente com Obi-Wan Kenobi, da trilogia prequel (mas se tornando o vilão secundário no terceiro filme após a morte do General Grievous), um dos antagonistas principais da trilogia original ao lado do Imperador Palpatine (porém acaba se redimindo no final), e um anti-herói póstumo na trilogia de sequência, sendo que suas ações ainda afetam o universo de Star Wars, sendo para o bem ou para o mal, principalmente quando se trata de seu neto, Ben Solo, o Kylo Ren, que tem por Vader uma admiração cega, e deseja mais do que tudo ser como ele (e até superá-lo).',
    },
  ]

  const FAKE_DATA_MOVIES: ItemData[] = [
    {
      id: '0',
      image_url:
        'https://www.thesun.co.uk/wp-content/uploads/2017/10/the-last-jedi-theatrical.jpg',
      title: 'Episódio I',
      subtitle: 'A Ameaça Fantasma',
      type: 'Filme',
      description: 'alala',
    },
    {
      id: '1',
      image_url:
        'https://www.thesun.co.uk/wp-content/uploads/2017/10/the-last-jedi-theatrical.jpg',
      title: 'Episódio I',
      subtitle: 'A Ameaça Fantasma',
      type: 'Filme',
      description: 'alala',
    },
    {
      id: '2',
      image_url:
        'https://www.thesun.co.uk/wp-content/uploads/2017/10/the-last-jedi-theatrical.jpg',
      title: 'Episódio I',
      subtitle: 'A Ameaça Fantasma',
      type: 'Filme',
      description: 'alala',
    },
    {
      id: '3',
      image_url:
        'https://www.thesun.co.uk/wp-content/uploads/2017/10/the-last-jedi-theatrical.jpg',
      title: 'Episódio I',
      subtitle: 'A Ameaça Fantasma',
      type: 'Filme',
      description: 'alala',
    },
  ]

  return (
    <ScreenScrollContainer>
      <Hero item={FAKE_DATA_MOVIES[0]} />
      <HomeList title="Filmes" data={FAKE_DATA_MOVIES} />
      <HomeList title="Personagens" data={FAKE_DATA_CHARACTERS} />
    </ScreenScrollContainer>
  )
}

export { Home }
