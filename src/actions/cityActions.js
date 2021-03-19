import * as types from '../constants/actionTypes'

import store from '../store'

export const getCitySpotAction = params => ({
  type: types.GET_CITY_SPOT,
  payload: [
    ...(params || []),
    { key: 'top', value: store.getState().citySpot.top },
    { key: 'skip', value: store.getState().citySpot.skip }
  ]
})
