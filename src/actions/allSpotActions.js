import * as types from '../constants/actionTypes'

import store from '../store'

export const getAllSpotAction = params => ({
  type: types.GET_ALL_SPOT,
  payload: [
    ...(params || []),
    { key: 'top', value: store.getState().allSpot.top },
    { key: 'skip', value: store.getState().allSpot.skip }
  ]
})
