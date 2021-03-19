import * as types from '../constants/actionTypes'

export const initialState = {
  spots: [],
  top: 30,
  skip: 0
}

export default function allSpotReducer (citySpot = initialState, action) {
  switch (action.type) {
    case types.GET_CITY_SPOT_SUCCESS:
      return {
        ...citySpot,
        spots: [...citySpot.spots, ...action.payload],
        skip: citySpot.skip + citySpot.top
      }
    default:
      return citySpot
  }
}
