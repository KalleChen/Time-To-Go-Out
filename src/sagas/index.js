import { all, takeLatest } from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import * as allSpotSaga from './allSpotSaga'
import * as citySpotSaga from './citySpotSaga'

export default function * rootSaga () {
  yield all([
    takeLatest(types.GET_ALL_SPOT, allSpotSaga.getAllSpotSaga),
    takeLatest(types.GET_CITY_SPOT, citySpotSaga.getAllSpotSaga)
  ])
}
