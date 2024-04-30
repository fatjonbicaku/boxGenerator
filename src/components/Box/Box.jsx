import React from 'react'
import style from './box.module.css'

const Box = ({box}) => {

  const boxStyle = {
    height: box.size +'px',
    width:box.size+'px',
    background:box.color
  }

  return (
    <div className={style.box} style={boxStyle}></div>
    
  )
}

export default Box;