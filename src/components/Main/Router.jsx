import React from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'

import AllSpot from '../AllSpot'
import CitySpot from '../CitySpot'
import AllCity from '../AllCity'
import * as routes from '../../constants/routes'

const Router = () => {
  return (
    <BrowserRouter>
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
  )
}

export default Router
