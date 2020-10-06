import React from 'react'

const Todo = (props) => {
  return (
    <div>
      {props.name}
      <button
        onClick={() => props.deleteTodo(props.id)}
      >X</button>
    </div>
  )
}

export default Todo
