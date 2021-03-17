import React from 'react'
import { useParams } from 'react-router-dom'

const CitySpot = () => {
  const { city } = useParams()
  return <div>{city}</div>
}

export default CitySpot
