import { atom } from 'recoil';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const initialTodo: Todo[] = [];

export const todoListState = atom({
  key: 'todoListState',
  default: initialTodo,
})