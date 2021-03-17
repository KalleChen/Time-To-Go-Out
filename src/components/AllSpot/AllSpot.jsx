import React from 'react'
import { connect } from 'react-redux'
import { getAllSpotAction } from '../../actions'
import { Button } from '@material-ui/core'

const AllSpot = ({ allSpot, getAllSpot, ui }) => {
  return (
    <>
      <Button
        variant='contained'
        color='primary'
        onClick={() =>
          getAllSpot([
            { key: 'top', value: allSpot.top },
            { key: 'skip', value: allSpot.skip }
          ])}
      >
        load
      </Button>
    </>
  )
}

export default connect(
  state => ({
    allSpot: state.allSpot,
    ui: state.ui
  }),
  dispatch => ({
    getAllSpot: params => dispatch(getAllSpotAction(params))
  })
)(AllSpot)
