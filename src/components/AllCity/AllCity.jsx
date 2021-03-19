import React from 'react'
import {
  Container,
  makeStyles,
  Grid,
  Button,
  Typography
} from '@material-ui/core'

import { cityNames } from '../../constants/cityName'

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(12)
  },
  gridContainer: {
    marginTop: theme.spacing(4)
  }
}))

const AllCity = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Typography variant='h4' align='center' color='primary'>
        選擇一個想查看的城市吧！
      </Typography>
      <Grid className={classes.gridContainer} container spacing={2}>
        {cityNames.map((cityName, index) => (
          <Grid
            key={index}
            item
            container
            xs={4}
            sm={3}
            md={2}
            lg={1}
            justify='center'
          >
            <Button variant='contained' color='secondary' as='a' href={`/scenicSpot/${cityName.en}`}>
              {cityName.zh}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default AllCity
