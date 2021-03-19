import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00BCD4',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#FFA726'
    },
    error: {
      main: '#f50057'
    }
  }
})

export default theme
