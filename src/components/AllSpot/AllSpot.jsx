import React from 'react'
import { connect } from 'react-redux'
import { getAllSpotAction } from '../../actions'

const ConnectAllSpot = ({ allSpot, getAllSpot, ui }) => {
  // useEffect(() => {
  //   getAllSpot([{ key: 'top', value: allSpot.top }, { key: 'skip', value: allSpot.skip }])
  // })
  console.log(allSpot)
  console.log(ui)
  return (
    <>
      <button onClick={() => getAllSpot([{ key: 'top', value: allSpot.top }, { key: 'skip', value: allSpot.skip }])}>load</button>
    </>
  )
}

export const AllSpot = connect(
  state => ({
    allSpot: state.allSpot,
    ui: state.ui
  }),
  dispatch => ({
    getAllSpot: (params) => dispatch(getAllSpotAction(params))
  })
)(ConnectAllSpot)
