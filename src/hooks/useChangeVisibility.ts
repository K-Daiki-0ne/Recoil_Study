import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../store/atom/atom';
import { Todo } from '../types/todo';

export const useChangeVisibility = () => {
  const setTodos = useSetRecoilState(todoListState);
  const changeVisibility = useCallback(
    (todoId: string) => {
      setTodos((todos: Todo[]) => 
        todos.map((todo) =>
          todo.id === todoId
            ? {
                ...todo,
                completed: !todo.completed
              }
            : todo
        ),
      )
    },
    [setTodos]
  )
  return changeVisibility;
}