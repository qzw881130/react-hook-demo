import React, {useReducer} from 'react'
const rc = (state, action) => {
    switch (action) {
        case 'add':
            return state + 1;
        case 'sub':
            return state - 1;
        default:
            return state;
    }
};
const ReducerDemo = () => {
    const [count, dispatch] = useReducer(rc, 0);
    const [num, dispatchNum] = useReducer(rc, 0);

    return (
        <div>
            <h2>Now the score is {count}</h2>
            <button onClick={() => dispatch('add')}>Inc</button>
            <button onClick={() => dispatch('sub')}>Dec</button>
            <hr/>
            <h2>Now the num is {num}</h2>
            <button onClick={() => dispatchNum('add')}>Inc</button>
            <button onClick={() => dispatchNum('sub')}>Dec</button>
        </div>
    );
}


export default ReducerDemo
