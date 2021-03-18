import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'

import NavBar from '../Navbar'
import theme from '../../utils/theme'
import AllSpot from '../AllSpot'
import CitySpot from '../CitySpot'
import AllCity from '../AllCity'
import * as routes from '../../constants/routes'

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path={routes.allSpotRoute}>
            <AllSpot />
          </Route>
          <Route exac path={routes.citySpotRoute}>
            <CitySpot />
          </Route>
          <Route exac path={routes.allCityRoute}>
            <AllCity />
          </Route>
          <Route path='/'>
            <Redirect to={routes.allSpotRoute} />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Main
