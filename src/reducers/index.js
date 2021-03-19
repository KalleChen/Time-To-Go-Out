import { combineReducers } from 'redux'
import allSpot from './allSpotReducer'
import citySpot from './citySpotReducer'
import ui from './uiReducer'

export default combineReducers({ allSpot, citySpot, ui })
