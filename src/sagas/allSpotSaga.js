import { put, call } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'

export function * getAllSpotSaga ({ payload }) {
  try {
    const res = yield call(fetch, { top: payload.top, skip: payload.skip })
    yield put({ type: types.GET_ALL_SPOT_SUCCESS, payload: res.data })
  } catch (err) {
    yield put({ type: types.GET_ALL_SPOT_ERROR, payload: err })
  }
}
