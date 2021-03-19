import SpotFetcher from './fetch'
import * as routes from '../constants/routes'

const spotFetcher = new SpotFetcher(routes.spotBasicDomain)
export const getAllSpot = params => spotFetcher.get(routes.spotRoute, params)
export const getCitySpot = (payload) =>
  spotFetcher.get(`${routes.spotRoute}/${payload.city}`, payload.params)
