import { Dimensions, PixelRatio } from 'react-native'

const { width } = Dimensions.get('window')

const FIGMA_WIDTH = 375

const px = (valuePx: number) => {
  const widthPercent = (valuePx / FIGMA_WIDTH) * 100
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(String(widthPercent))) / 100
  )

  return screenPixel
}

const metrics = {
  px,
}

export { metrics }
