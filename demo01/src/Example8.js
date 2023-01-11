import React, {useEffect, useRef, useState} from 'react'

function Example8() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
      inputEl.current.value = 'test text';
      console.log(inputEl);
    //   setText(inputEl.current.value);
  }

  const [text, setText] = useState('ddd');
  const textRef = useRef();

  useEffect(() => {
    textRef.current = text;
    console.log('textRef.current:', textRef.current);
  });

  return (
    <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Show Text In Input</button>
        <br/><br/>
        <input value={text} onChange={(e) => {setText(e.target.value)}} />
    </>
  )
}

export default Example8