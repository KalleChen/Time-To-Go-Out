import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import { getCitySpotAction } from '../../actions'
import SpotContainer from '../SpotContainer'

const CitySpot = ({ citySpots, getCitySpot, uiState }) => {
  const { city } = useParams()

  useEffect(() => {
    getCitySpot({ city: city })
  }, [city, getCitySpot])
  return (
    <SpotContainer
      spots={citySpots}
      scrollAction={() => getCitySpot({ city: city })}
      uiState={uiState}
    />
  )
}

export default connect(
  state => ({
    citySpots: state.citySpot.spots,
    uiState: state.ui.citySpot
  }),
  dispatch => ({
    getCitySpot: payload => dispatch(getCitySpotAction(payload))
  })
)(CitySpot)
