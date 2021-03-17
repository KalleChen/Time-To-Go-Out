import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

import AllSpot from '../AllSpot'
import theme from '../../utils/theme'

const Main = () => {
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AllSpot />
    </ThemeProvider>
  )
}

export default Main
