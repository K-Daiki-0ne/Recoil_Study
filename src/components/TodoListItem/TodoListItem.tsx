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
  Checkbox,
  TextField,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStyle } from './style';

type TodoProps = {
  todo: Todo
}

export const TodoListItem: React.FC<TodoProps> =({ todo })=> {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === todo);

  const classes = useStyle();
  
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
    <div className={classes.root}>
      <TextField 
        type='text'
        value={todo.title}
        onChange={editItemText}
        size='small'
        className={classes.text}
      />
      <Checkbox 
        color='primary'
        checked={todo.completed}
        onChange={toggleItemCompletion}
      />
      <Button
        variant="contained"
        onClick={deleteItem}
        size='small'
      >
        <DeleteIcon 
          fontSize='small'
        />
      </Button>
    </div>
  )
}