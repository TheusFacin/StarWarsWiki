import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      light: string
      red: string
      dark: string
      black: string
      transparentDark: string
    }
    fonts: {
      regular: string
      semiBold: string
      bold: string
      black: string
    }
    metrics: {
      px: (valuePx: number) => number
    }
  }
}
