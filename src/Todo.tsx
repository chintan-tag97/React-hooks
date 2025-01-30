import React,{useMemo} from 'react'


function Todo({todos, theme, tab}) {
    const visibleTodos = useMemo(() => filterTodos(todos, tab),[todos, tab]);

  return (
    <div className={theme}>
        
        <p><b>Note: <code>List</code> is artificially slowed down!</b></p>
        <List items={visibleTodos}/>
    </div>
  )
}

export default Todo