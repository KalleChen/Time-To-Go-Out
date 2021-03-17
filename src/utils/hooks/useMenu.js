import { useState } from 'react'

const useMenu = (initialAnchorEl = null) => {
  const [anchorEl, setAnchorEl] = useState(initialAnchorEl)
  const open = Boolean(anchorEl)
  const handleOpen = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(initialAnchorEl)
  }
  return { anchorEl, open, handleOpen, handleClose }
}

export default useMenu
