import React, {useState,useEffect} from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)
    useEffect(() =>
       { console.log('Count has changed!')}, [count])
  return (
    <div className="App">
        <h1>useEffect</h1>
        <p>Count is: {count}</p>
        <div>
            <button onClick={() => setCount(count+2)}>Add 2</button>
            <button onClick={() => setCount(count-2)}>Decrease 2</button>

            <button onClick={()=> setCount(count+20)}>Add 20</button>
            <button onClick={() => setCount(count-20)}>Decrease 20</button>

            <button onClick={() => setCount(0)}>Reset count</button>
        </div>

    </div>
  )
}

export default UseEffect