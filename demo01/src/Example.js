import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    console.log('useEffect=>Index');
    return () => {
      console.log('Bye Index');
    }
  }, [])
  return <h2>HomePage</h2>
}
const List = () => {
  useEffect(() => {
    console.log('useEffect=>List');
    return () => {
      console.log('Bye List');
    }
  }, [])
  return <h2>List page</h2>
}

const Example = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`useEffect => you clicked ${count} times`);
    return () => {
      console.log('==============================');
    }
  }, [count]);

  return (
    <div>
        <div>You clicked {count} times</div>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <Router>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/list'>List</Link></li>
          </ul>
          <Routes>
            <Route path='/' exact element={<Index/>} />
            <Route path='/list' element={<List />} />
          </Routes>
        </Router>
    </div>
  )
}

export default Example