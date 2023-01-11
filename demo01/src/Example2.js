import React, {useState} from 'react'

const Example2 = () => {
  //eslint-disable-next-line no-unused-vars
    const [age, setAge] = useState(12);
    //eslint-disable-next-line no-unused-vars
    const [sex, setSex] = useState('boy');
    //eslint-disable-next-line no-unused-vars
    const [work, setWork] = useState('engineer');


    return (
      <div>
          <p>age: {age}</p>
          <p>sex: {sex}</p>
          <p>work: {work}</p>
      </div>
    )
}

export default Example2