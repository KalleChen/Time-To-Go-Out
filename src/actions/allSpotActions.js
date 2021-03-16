import * as types from '../constants/actionTypes'

export const getAllSpot = (top, skip) => ({
  type: types.GET_ALL_SPOT,
  payload: {
    top: top,
    skip: skip
  }
})
