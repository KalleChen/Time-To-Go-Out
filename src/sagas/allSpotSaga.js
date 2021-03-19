import { put, call } from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import { getAllSpot } from '../api'

export function * getAllSpotSaga ({ payload }) {
  try {
    const res = yield call(getAllSpot, payload)
    const data = yield res.json()
    if (res.ok) {
      if (data.length === 0) {
        yield put({ type: types.GET_ALL_SPOT_END, payload: data })
      } else {
        yield put({ type: types.GET_ALL_SPOT_SUCCESS, payload: data })
      }
    } else {
      yield put({ type: types.GET_ALL_SPOT_ERROR, payload: data.message })
    }
  } catch (err) {
    console.error(err)
    yield put({ type: types.GET_ALL_SPOT_ERROR, payload: err.message })
  }
}
