import React from 'react';
import { useRecoilValue } from 'recoil';
import { TodoItemCreater } from '../TodoItemCreater/TodoItemCreater';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import { filterTodoListState } from '../../store/selector/selector';

export function TodoList() {
  const todoList = useRecoilValue(filterTodoListState);
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