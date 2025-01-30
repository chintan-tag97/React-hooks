import React,{ useState} from 'react'
// import {createTodos} from './utils.tsx';
import TodoList from './Todo.tsx';

function UseMemo() {
    const [tab, setTab] = useState("all");
    const [isDark, setIsDark] = useState(false); 
  return (
    <div>
        <button onClick={ () => setTab('all')}>All</button>
        <button onClick={() => setTab('active')}>Active</button>
        <button onClick={() => setTab('complated')}>Completed</button>

        <br/>
        <label>
            <input type="checkbox" checked={isDark} onChange={e => setIsDark(e.target.checked)}>Dark mode</input>
        </label>
        <hr/>
        <TodoList todos={todos} tab={tab} theme={isDark? 'dark': 'light'}/>
    </div>
  )
}

export default UseMemo