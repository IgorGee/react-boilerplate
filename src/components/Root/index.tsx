import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import Navigation from './components/Navigation'

const palette = {
  primary: { main: '#1E88E5' },
  secondary: { main: '#99aa22' },
}

const theme = createMuiTheme({ palette })

const Root = (props: {children: JSX.Element}) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Navigation>{props.children}</Navigation>
  </MuiThemeProvider>
)

export default Root
