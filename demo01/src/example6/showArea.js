import React, {useContext} from 'react';
import {ColorContext} from './color';

function ShowArea() {
    const {color} = useContext(ColorContext);
  return (
    <div style={{color: color}}>Front color is {color}</div>
  )
}

export default ShowArea;