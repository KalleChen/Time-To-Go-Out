import * as types from '../constants/actionTypes'

export const getCitySpotAction = (top, skip) => ({
  type: types.GET_CITY_SPOT,
  payload: {
    top: top,
    skip: skip
  }
})
