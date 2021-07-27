import React, { useCallback, useState } from 'react'
import { useEffect } from 'react'
import YoutubePlayer, { getYoutubeMeta } from 'react-native-youtube-iframe'
import { Container, GoBack, Loader, Text } from '../../components'
import { useDataStore } from '../../services/stores'
import { theme } from '../../styles'
import { VideoContainer } from './styles'

const Watch = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState<string | null>(null)
  const [height, setHeight] = useState(0)

  const { selectedData } = useDataStore()

  useEffect(() => {
    getYoutubeData()
  })

  const getYoutubeData = async () => {
    const { title, height, width } = await getYoutubeMeta(
      getYoutubeId(selectedData.trailer_url as string)
    )

    setHeight(calcHeight(width, height))

    setTitle(title)
  }

  const calcHeight = (w: number, h: number) => {
    const ratio = h / w

    return theme.metrics.width * ratio
  }

  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setIsPlaying(false)
    }
  }, [])

  const onReady = useCallback(() => {
    setLoading(false)
  }, [])

  const getYoutubeId = (url: string) => {
    let id: string

    const splittedUrl = url
      .replace(/(>|<)/gi, '')
      .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)

    if (splittedUrl) id = splittedUrl[2].split(/[^0-9a-z_\-]/i)[0]
    else id = url

    return id
  }

  return (
    <Container align="center" justify="center">
      <GoBack />

      <YoutubePlayer
        height={loading ? 0 : theme.metrics.px(height)}
        width={loading ? 0 : theme.metrics.width}
        play={isPlaying}
        videoId={getYoutubeId(selectedData.trailer_url as string)}
        onChangeState={onStateChange}
        onReady={onReady}
      ></YoutubePlayer>

      {loading && (
        <VideoContainer height={height}>
          <Loader />
        </VideoContainer>
      )}

      {title && (
        <Text fontFamily="bold" size={28} ml={24} mr={24}>
          {title}
        </Text>
      )}
    </Container>
  )
}

export { Watch }
