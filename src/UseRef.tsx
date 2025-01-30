import React, {useRef}from 'react'

function UseRef() {
    const countRef = useRef(0);

    const handle = ()=> {
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`);

    };
    console.log('I rendered!');
  return (
    <div>
        <h1>useRef</h1>
        <button onClick={handle}>Click Me</button>
    </div>
  )
}

export default UseRef