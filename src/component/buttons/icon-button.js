import cn from 'classnames'
import React, { useState } from 'react'
import styles from './icon-button.module.css'

const IconButton = (props) => {
  const { activeicon, icon } = props
  const [isActive, setIsActive] = useState(false)
  return (
    <button
      className={cn(styles.iconButton, isActive ? 'activeIcon' : '')}
      onClick={() => setIsActive(!isActive)}
    >
      {isActive ? activeicon : icon}
    </button>
  )
}

export default IconButton
