import React ,{useState} from 'react'

function UseState() {
    const [count, setCount] = useState(0)
  return (
    <div className="App">
        <h1>useState</h1>
        <p>Count is : {count}</p>
        <div>
            <button onClick={() => setCount(count+1)}>Add 1</button>
            <button onClick={() => setCount(count-1)}>Decrease 1</button>

            <button onClick={() => setCount(count+10)}>Add 10</button>
            <button onClick={() => setCount(count-10)}>Decrease 10</button>

            <button onClick={() => setCount(0)}>Reset count</button>
        </div>
    </div>
  )
}

export default UseState
