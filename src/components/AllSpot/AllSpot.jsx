import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllSpotAction } from '../../actions'
import PropTypes from 'prop-types'

import SpotContainer from '../SpotContainer'

const AllSpot = ({ spots, getAllSpot, uiState }) => {
  console.log(spots, uiState)
  useEffect(() => {
    getAllSpot()
  }, [getAllSpot])
  return (
    <SpotContainer scrollAction={getAllSpot} spots={spots} uiState={uiState} />
  )
}

AllSpot.propTypes = {
  spots: PropTypes.array.isRequired,
  getAllSpot: PropTypes.func.isRequired,
  uiState: PropTypes.object.isRequired
}

export default connect(
  state => ({
    spots: state.allSpot.spots,
    uiState: state.ui.allSpot
  }),
  dispatch => ({
    getAllSpot: params => dispatch(getAllSpotAction(params))
  })
)(AllSpot)
