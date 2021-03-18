import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllSpotAction } from '../../actions'

import SpotContainer from '../ContentContainer'

const AllSpot = ({ allSpot, getAllSpot, ui }) => {
  console.log(allSpot)
  useEffect(() => {
    getAllSpot()
  }, [getAllSpot])
  return (
    <SpotContainer scrollAction={() => getAllSpot()}>
      {allSpot.spots.map((spot, index) => (
        <p key={index}>{spot.DescriptionDetail}</p>
      ))}
    </SpotContainer>
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
