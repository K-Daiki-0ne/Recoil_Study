import { useCallback } from 'react';
import { todoListState } from '../store/atom/atom';
import { useSetRecoilState } from 'recoil';
import { Todo } from '../types/todo';
import shortid from 'shortid';

export const useTodo = () => {
  // Recoil state setter
  const setTodo = useSetRecoilState(todoListState);
  const addTodo = useCallback(
    (title: string) => {
      setTodo((oldTodos: Todo[]) =>[
        ...oldTodos, 
        {
          id: shortid.generate(),
          title,
          completed: false
        }
      ])
    },
    [setTodo],
  )
  return addTodo;
}