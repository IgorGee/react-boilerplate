import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'

import Navigation from './components/Navigation'

const palette = {
  primary: { main: '#1E88E5' },
  secondary: { main: '#99aa22' },
}

const theme = createMuiTheme({ palette })

interface Props {
  children: JSX.Element
}

const Root = (props: Props) => (
  <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation>{props.children}</Navigation>
    </MuiThemeProvider>
  </ThemeProvider>
)

export default Root
