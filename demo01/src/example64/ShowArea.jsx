import React from 'react'
import { useContext } from 'react'
import { ColorContext } from './Color'

function ShowArea() {
  const {color} = useContext(ColorContext);
  return (
    <div style={{color: color}}>the color is {color}</div>
  )
}

export default ShowArea