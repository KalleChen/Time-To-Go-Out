import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

import Router from './Router'
import NavBar from '../Navbar'
import theme from '../../utils/theme'

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Router />
    </ThemeProvider>
  )
}

export default Main
