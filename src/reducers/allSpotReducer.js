import * as types from '../constants/actionTypes'

export const initialState = { spots: [], top: 30, skip: 0 }

export default function allSpotReducer (allSpot = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_SPOT_SUCCESS:
      return { ...allSpot, spots: [...allSpot.spots, ...action.payload] }
    default:
      return allSpot
  }
}
