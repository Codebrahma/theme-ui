import React from 'react'
import {
  ThemeProvider,
  Styled,
  Layout,
  Main,
  Container,
} from 'theme-ui'
import { useState } from 'react'
import merge from 'lodash.merge'

import GoogleFonts from './google-fonts'
import Header from './header'
import Footer from './footer'
import themes from './typography-themes'
import createTypographyStyles from 'theme-ui/typography'
import typographyThemes from './typography-themes'
import baseTheme from './theme'

const themeNames = Object.keys(themes)

const ThemeSelect = props =>
  <div>
    <label
      htmlFor={props.name}
      css={{
        fontSize: 16,
        mr: 2,
      }}>
      Theme
    </label>
    <select
      id={props.name}
      {...props}
      css={{
        fontFamily: 'system-ui, sans-serif',
        fontSize: 16,
        p: 2,
      }}>
      {themeNames.map(name => (
        <option
          key={name}
          label={name}
          value={name}
        />
      ))}
    </select>
  </div>

export default props => {
  // switch typography themes
  const [ themeName, setTheme ] = useState(themeNames[0])

  const typographyTheme = typographyThemes[themeName]
  const typography = createTypographyStyles(typographyTheme)

  const theme = merge({}, baseTheme, {
    styles: typography.styles,
    typography
  })

  return (
    <ThemeProvider theme={theme}>
      <GoogleFonts />
      <Styled.root>
        <Layout>
          <Header>
            <ThemeSelect
              name='theme'
              value={themeName}
              onChange={e => {
                setTheme(e.target.value)
              }}
            />
            <button
              onClick={e => {
                const i = (themeNames.indexOf(themeName) + 1) % themeNames.length
                setTheme(themeNames[i])
              }}>
              Next
            </button>
          </Header>
          <Main>
            <Container
              css={{
                maxWidth: 768,
              }}>
              {props.children}
            </Container>
          </Main>
          <Footer />
        </Layout>
      </Styled.root>
    </ThemeProvider>
  )
}
