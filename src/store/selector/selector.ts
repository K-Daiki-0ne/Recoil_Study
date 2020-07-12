import { selector } from 'recoil';
import { 
  todoListState,
  todoListFilterState
} from '../atom/atom';
import { Todo } from '../../types/todo';

const getVisibleTodo = (list: Todo[], filter: string) => {
  switch(filter) {
    case 'Show All':
      return list;
    case 'Show Completed':
      return list.filter((todo) => todo.completed);
    case 'Show UnCompleted':
      return list.filter((todo) => !todo.completed);
    default:
      throw new Error(`Sorry Not ${filter}`);
  }
}

export const filterTodoListState = selector({
  key: 'filterTodoListState',
  get: ({ get }) => {
    const filetr = get(todoListFilterState);
    const list = get(todoListState);
    
    getVisibleTodo(list, filetr);
  }
})

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.completed).length;
    const totalUnCompletedNum = todoList.filter((item) => !item.completed).length;
    const percentCompleted = totalNum === 0 
      ? 0
      : totalCompletedNum / totalNum;
    
    return {
      totalNum,
      totalCompletedNum,
      totalUnCompletedNum,
      percentCompleted
    };
  }
})