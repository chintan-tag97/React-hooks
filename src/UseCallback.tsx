import React, { useState,useCallback} from 'react'
import ReactDOM from "react-dom/client";
import Todos from "./Todos.tsx";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};


export default UseCallback