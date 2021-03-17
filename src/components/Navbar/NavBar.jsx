import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Hidden,
  IconButton,
  Popover,
  List,
  ListItem
} from '@material-ui/core'
import ExploreIcon from '@material-ui/icons/Explore'
import MenuIcon from '@material-ui/icons/Menu'

import useMenu from '../../utils/hooks/useMenu'

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: '40px',
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  button: {
    color: '#ffffff',
    fontWeight: 'bold'
  }
}))

const NavBar = () => {
  const classes = useStyles()
  const menus = [
    { title: '所有景點', url: '/scenicSpot' },
    { title: '所有城市', url: '/cities' }
  ]
  const {
    anchorEl: menuAnchorEl,
    open: isMenuOpen,
    handleOpen: openMenu,
    handleClose: closeMenu
  } = useMenu()
  return (
    <AppBar>
      <Toolbar>
        <ExploreIcon className={classes.icon} />
        <Typography variant='h5' className={classes.title}>
          好無聊喔
        </Typography>
        <Hidden xsDown>
          {menus.map((menu, index) => (
            <Button
              key={index}
              size='large'
              className={classes.button}
              as='a'
              href={menu.url}
            >
              {menu.title}
            </Button>
          ))}
        </Hidden>
        <Hidden smUp>
          <IconButton onClick={openMenu}>
            <MenuIcon size='large' />
          </IconButton>
        </Hidden>
        <Popover
          id='mouse-over-popover'
          open={isMenuOpen}
          onClose={closeMenu}
          anchorEl={menuAnchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <List>
            {menus.map((menu, index) => (
              <ListItem key={index}>
                <Button as='a' href={menu.url}>
                  <Typography variant='body1'>{menu.title}</Typography>
                </Button>
              </ListItem>
            ))}
          </List>
        </Popover>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
