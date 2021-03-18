import React from 'react'
import { Container, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(10),
    height: '100vh',
    overflowY: 'scroll'
  }
}))

const SpotContainer = ({ scrollAction, spots, uiState }) => {
  const classes = useStyles()

  const checkScrollBottom = event => {
    const bottom =
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight
    if (bottom) {
      scrollAction()
    }
  }
  return (
    <Container
      className={classes.container}
      onScroll={checkScrollBottom}
    ></Container>
  )
}

SpotContainer.prototypes = {
  scrollAction: PropTypes.func.isRequired,
  spots: PropTypes.array.isRequired,
  uiState: PropTypes.object.isRequired
}

export default SpotContainer
