import React from 'react'
import { ColorModeProvider, ThemeProvider } from 'theme-ui'
import components from './components'
import theme from './theme'

const Root = props => {
  return (
    <ColorModeProvider initialColorMode='light'>
      <ThemeProvider
        components={components}
        theme={theme}>
        {props.children}
      </ThemeProvider>
    </ColorModeProvider>
  )
}

export const wrapRootElement = ({ element, props }) =>
  <Root>
    {element}
  </Root>
