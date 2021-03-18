import React from 'react'
import { Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(10),
    height: '100vh',
    overflowY: 'scroll'
  }
}))

const ContentContainer = ({ scrollAction, children }) => {
  const classes = useStyles()

  const checkScrollBottom = event => {
    const bottom =
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight
    if (bottom) {
      console.log('bottom')
    }
  }
  return (
    <Container className={classes.container} onScroll={checkScrollBottom}>
      {children}
    </Container>
  )
}

export default ContentContainer
