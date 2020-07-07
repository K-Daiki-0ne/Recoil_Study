import React from 'react'
import { Todo } from '../../types/todo';

type TodoProps = {
  todo: Todo
}

export const TodoListItem: React.FC<TodoProps> =({ todo })=> {
  return (
    <p>Hello TodoItem Component</p>
  )
}