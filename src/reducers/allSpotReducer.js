import * as types from '../constants/actionTypes'

export const initialState = []

export default function allSpotReducer (allSpot = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_SPOT_SUCCESS:
      return [...allSpot, ...action.payload]
    default:
      return allSpot
  }
}
