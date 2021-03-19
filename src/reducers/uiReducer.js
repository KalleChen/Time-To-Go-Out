import * as types from '../constants/actionTypes'

export const initialState = {
  allSpot: {
    status: null,
    message: ''
  },
  citySpot: {
    status: null,
    message: ''
  }
}

export default function uiReducer (ui = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_SPOT:
      return {
        ...ui,
        allSpot: {
          ...ui.allSpot,
          status: 'loading'
        }
      }
    case types.GET_ALL_SPOT_SUCCESS:
      return {
        ...ui,
        allSpot: {
          ...initialState.allSpot
        }
      }
    case types.GET_ALL_SPOT_ERROR:
      return {
        ...ui,
        allSpot: {
          status: 'error',
          message: action.payload
        }
      }
    case types.GET_CITY_SPOT:
      return {
        ...ui,
        citySpot: {
          ...ui.citySpot,
          status: 'loading'
        }
      }
    case types.GET_CITY_SPOT_SUCCESS:
      return {
        ...ui,
        citySpot: {
          ...initialState.allSpot
        }
      }
    case types.GET_CITY_SPOT_ERROR:
      return {
        ...ui,
        citySpot: {
          status: 'error',
          message: action.payload
        }
      }
    default:
      return ui
  }
}
