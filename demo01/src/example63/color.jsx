import React, { createContext } from 'react';
import { useReducer } from 'react';

export const UPDATE_COLOR = 'update-color';
export const ColorContext = createContext({});
const reducer = (state, action) => {
    switch(action.type){
        case UPDATE_COLOR:
            return action.color;
        default:
            return state;
    }
}

export const Color = props => {
    const [color, dispatch] = useReducer(reducer, 'blue');

    return (
        <ColorContext.Provider value={{color, dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}
