import React, { useState, useMemo, useCallback } from 'react'
import {
  Container,
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Button,
  Typography,
  Grow,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  CircularProgress,
  Box
} from '@material-ui/core'
import PropTypes from 'prop-types'

import { googleMapPlaceRoute } from '../../constants/routes'

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(10),
    height: 'calc(var(--vh, 1vh)*100)',
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    maxWidth: 300,
    margin: theme.spacing(3)
  },
  media: {
    height: 140
  },
  cardContent: {
    height: '250px',
    overflow: 'scroll'
  }
}))

const SpotContainer = ({ scrollAction, spots, uiState }) => {
  const classes = useStyles()
  const [activeSpot, setActiveSpot] = useState(null)
  const dialogOpen = useMemo(() => Boolean(activeSpot !== null), [activeSpot])
  const handleOpenDialog = useCallback(
    index => {
      setActiveSpot(spots[index])
    },
    [spots, setActiveSpot]
  )
  const handleCloseDialog = useCallback(() => {
    setActiveSpot(null)
  }, [setActiveSpot])
  const checkScrollBottom = event => {
    const bottom =
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight
    if (bottom && uiState.status !== 'loading') {
      scrollAction()
    }
  }
  return (
    <>
      <Container className={classes.container} onScroll={checkScrollBottom}>
        {spots.map((spot, index) => (
          <Grow key={index} in timeout={1000}>
            <Card className={classes.card}>
              <CardActionArea onClick={() => handleOpenDialog(index)}>
                <CardMedia
                  className={classes.media}
                  image={spot.Picture.PictureUrl1}
                  title={spot.Name}
                  component='div'
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {spot.Name}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    {spot.Description || spot.DescriptionDetail}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size='small'
                  color='primary'
                  as='a'
                  href={
                    googleMapPlaceRoute +
                    `&query=${spot.Position.PositionLat},${spot.Position.PositionLon}`
                  }
                  target='_blank'
                  style={{ marginLeft: 'auto' }}
                >
                  在地圖上查看
                </Button>
                <Button
                  size='small'
                  color='primary'
                  onClick={() => handleOpenDialog(index)}
                >
                  查看更多
                </Button>
              </CardActions>
            </Card>
          </Grow>
        ))}
        <Box width='100%' display='flex' justifyContent='center'>
          {uiState.status === 'loading' && (
            <CircularProgress color='secondary' />
          )}
          {uiState.status === 'error' && (
            <Typography color='error'>{uiState.message}</Typography>
          )}
        </Box>
      </Container>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        {activeSpot && (
          <>
            <DialogTitle>{activeSpot.Name}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {activeSpot.DescriptionDetail}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                size='small'
                color='primary'
                as='a'
                href={
                  googleMapPlaceRoute +
                  `&query=${activeSpot.Position.PositionLat},${activeSpot.Position.PositionLon}`
                }
                target='_blank'
                style={{ marginLeft: 'auto' }}
              >
                在地圖上查看
              </Button>
              <Button size='small' color='primary' onClick={handleCloseDialog}>
                關閉
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  )
}

SpotContainer.prototypes = {
  scrollAction: PropTypes.func.isRequired,
  spots: PropTypes.array.isRequired,
  uiState: PropTypes.shape({
    status: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  })
}

export default SpotContainer
