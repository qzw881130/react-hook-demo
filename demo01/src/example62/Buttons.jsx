import React from 'react'
import { useContext } from 'react'
import { ColorContext, UPDATE_COLOR } from './color';

function Buttons() {
  const {dispatch} = useContext(ColorContext);
  return (
    <div>
        <button onClick={() => dispatch({type: UPDATE_COLOR, color: 'red'})}>Red</button>
        <button onClick={() => dispatch({type: UPDATE_COLOR, color: 'yellow'})}>Yellow</button>
        <button onClick={() => dispatch({type: UPDATE_COLOR, color: 'orange'})}>Orange</button>
    </div>
  )
}

export default Buttons