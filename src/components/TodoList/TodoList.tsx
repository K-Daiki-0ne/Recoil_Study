import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../../store/atom/atom';
import { TodoItemCreater } from '../TodoItemCreater/TodoItemCreater';
import { TodoItem } from '../TodoItem/TodoItem';

export function TodoList() {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <TodoItemCreater />
      {
        todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))
      }
    </>
  )
}