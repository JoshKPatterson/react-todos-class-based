import React from 'react'
import Todo from './Todo'

const TodosList = (props) => {
  const todos = props.todos.map((todo) => {
    return <Todo 
              key={todo.key} 
              name={todo.name} 
              id={todo.key} 
              deleteTodo={props.deleteTodo}
            />
  })
  return (
    <div>
      {todos}
    </div>
  )
}

export default TodosList
