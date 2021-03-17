import React from 'react'
import { connect } from 'react-redux'
import { getAllSpot } from '../../actions'

const ConnectAllSpot = ({ allSpot }) => {
  console.log(allSpot)
  return (
    <div>hi</div>
  )
}

export const AllSpot = connect(
  state => ({
    allSpot: state.allSpot
  })
)(ConnectAllSpot)
