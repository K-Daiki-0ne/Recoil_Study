import { selector } from 'recoil';
import { 
  todoListState,
  todoListFilterState
} from '../atom/atom';

export const filterTodoListState = selector({
  key: 'filterTodoListState',
  get: ({ get }) => {
    const filetr = get(todoListFilterState);
    const list = get(todoListState);
    
    switch(filetr) {
      case 'Show Completed':
        return list.filter((item) => item.completed);
      case 'Show UnCompleted':
        return list.filter((item) => !item.completed);
      default:
        return list;
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