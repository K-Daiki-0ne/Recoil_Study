import { selector } from 'recoil';
import { 
  todoListState,
  todoListFilterState
} from '../atom/atom';
import { Todo } from '../../types/todo';

export const filterTodoListState = selector({
  key: 'filterTodoListState',
  get: ({ get }) => {
    const filter: string = get(todoListFilterState);
    const list: Todo[] = get(todoListState);

    switch(filter) {
      case 'Show Completed':
        return list.filter((item) => item.completed);
      case 'Show Uncompleted':
        return list.filter((item) => !item.completed);
      case 'Show All':
        return list;
      default:
        throw new Error(`Unknown filter ${filter}`);
    }
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