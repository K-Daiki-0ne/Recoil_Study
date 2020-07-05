import { atom } from 'recoil';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const initialTodo: Todo[] = [];

export const todoListState = atom({
  key: 'todoListState',
  default: initialTodo,
})