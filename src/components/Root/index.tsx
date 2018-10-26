import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import styled from 'styled-components'

import Footer from './components/Footer'
import Header from './components/Header'

const palette = {
  primary: { main: '#1E88E5' },
  secondary: { main: '#99aa22' },
}

const theme = createMuiTheme({ palette })

const MaxHeight = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.main`
  flex: 1;
`

const Root = (props: {children: JSX.Element}) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <MaxHeight>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </MaxHeight>
  </MuiThemeProvider>
)

export default Root
