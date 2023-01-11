import React, {useMemo, useState} from 'react'

export function Example7() {
    const [good1, setGood1] = useState('good1');
    const [good2, setGood2] = useState('good2');

  return (
    <>
        <button onClick={() => {setGood1(new Date().getTime())}}>good1</button>
        <button onClick={() => {setGood2(new Date().getTime() + ' good2....XXXXX.')}}>good2</button>
        <ChildComponent name={good1}>{good2}</ChildComponent>
    </>
  )
}

export function ChildComponent({name, children}){
    const changeGood1 = () => {
        console.log('it is good1 changed');
        return name + '  is changed';
    }
    const actionGood1 = useMemo(() => changeGood1(name), [name]);

    return (
        <>
            <div>{actionGood1}</div>
            <div>{children}</div>
        </>
    )
}