import { atom } from 'recoil';
import { Todo } from '../../types/todo';

const initialTodo: Todo[] = [];

export const todoListState = atom({
  key: 'todoListState',
  default: initialTodo,
})