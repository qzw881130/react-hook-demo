import React from 'react'
import { useContext } from 'react'
import { ColorContext } from '../example63/color';

function ShowArea() {
  const {color} = useContext(ColorContext);
  console.log(color);
  return (
    <div style={{color: color}}>The color is {color}</div>
  )
}

export default ShowArea