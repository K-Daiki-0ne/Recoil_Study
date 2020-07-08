import React from 'react'
import { Todo } from '../../types/todo';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../store/atom/atom';
import { 
  replaceTodoAtIndex,
  removeTodoAtIndex 
} from '../../util/index.js';
import { 
  Button,
  Checkbox
} from '@material-ui/core';

type TodoProps = {
  todo: Todo
}

export const TodoListItem: React.FC<TodoProps> =({ todo })=> {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === todo);
  
  const editItemText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTodo = replaceTodoAtIndex(todoList, index, {
      ...todo,
      title: event.target.value
    });
    setTodoList(newTodo);
  };

  const toggleItemCompletion= () => {
    const newTodo = replaceTodoAtIndex(todoList, index, {
      ...todo,
      completed: !todo.completed,
    });
    setTodoList(newTodo);
  }

  const deleteItem = () => {
    const newList = removeTodoAtIndex(todoList, index);

    setTodoList(newList);
  }



  return (
    <div>
      <input type='text' value={todo.title} onChange={editItemText} />
      <Checkbox 
        checked={todo.completed}
        onChange={toggleItemCompletion}
      />
      <Button
        onClick={deleteItem}
      >
        Delete
      </Button>
    </div>
  )
}