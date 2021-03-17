import SpotFetcher from './fetch'
import * as routes from './routes'

const spotFetcher = new SpotFetcher(routes.spotBasicDomain)

export const getAllSpot = params => spotFetcher.get(routes.spotRoute, params)
export const getCitySpot = (city, params) =>
  spotFetcher.get(`${routes.spotRoute}/${city}`, params)
