import React from 'react'
import {
  Styled,
  Layout,
  Main,
  Container,
} from 'theme-ui'
import { Global } from '@emotion/core'

import Header from './header'
import Footer from './footer'

export default props => {
  return (
    <Styled.root>
      <Global
        styles={{
          '*': {
            boxSizing: 'border-box'
          },
          body: {
            margin: 0,
          }
        }}
      />
      <Layout>
        <Header />
        <Main>
          <Container>
            {props.children}
          </Container>
        </Main>
        <Footer />
      </Layout>
    </Styled.root>
  )
}
