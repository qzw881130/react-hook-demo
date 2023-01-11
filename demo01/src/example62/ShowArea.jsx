import React from 'react'
import { useContext } from 'react';
import { ColorContext } from '../example62/color';

function ShowArea() {
  const {color} = useContext(ColorContext);

  return (
    <div style={{color: color}}>The color is {color}</div>
  )
}

export default ShowArea