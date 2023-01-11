import React, {useState, createContext, useContext} from 'react';

const CountContext = createContext();

const Counter = () => {
    let count = useContext(CountContext);
    return <h2>{count}</h2>
}

const Example4 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
        <div>You clicked {count} times</div>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <CountContext.Provider value={count}>
            <Counter />
        </CountContext.Provider>
    </div>
  )
}

export default Example4