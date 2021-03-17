import * as types from '../constants/actionTypes'

export const getAllSpotAction = (params) => ({
  type: types.GET_ALL_SPOT,
  payload: params
})
