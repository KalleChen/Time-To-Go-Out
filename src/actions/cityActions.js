import * as types from '../constants/actionTypes'

export const getCitySpot = (top, skip) => ({
  type: types.GET_CITY_SPOT,
  payload: {
    top: top,
    skip: skip
  }
})
