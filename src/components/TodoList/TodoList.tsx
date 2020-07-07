import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../../store/atom/atom';
import { TodoItemCreater } from '../TodoItemCreater/TodoItemCreater';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import { Todo } from '../../types/todo';

export function TodoList() {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <TodoItemCreater />
      {
        todoList.map((todoItem) => (
          <TodoListItem key={todoItem.id} todo={todoItem} />
        ))
      }
    </>
  )
}