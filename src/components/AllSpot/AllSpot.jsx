import React from 'react'
import { connect } from 'react-redux'
import { getAllSpotAction } from '../../actions'
import { Button } from '@material-ui/core'

import ContentContainer from '../ContentContainer'

const AllSpot = ({ allSpot, getAllSpot, ui }) => {
  console.log(allSpot)
  return (
    <ContentContainer
      scrollAction={() => {
        console.log('bottom')
      }}
    >
      <Button
        variant='contained'
        color='primary'
        onClick={() =>
          getAllSpot([
            { key: 'top', value: allSpot.top },
            { key: 'skip', value: allSpot.skip }
          ])
        }
      >
        load
      </Button>
      {allSpot.spots.map((spot, index) => (
        <p key={index}>{spot.DescriptionDetail}</p>
      ))}
    </ContentContainer>
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
