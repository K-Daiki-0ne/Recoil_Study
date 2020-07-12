import { selector } from 'recoil';
import { 
  todoListState,
  todoListFilterState
} from '../atom/atom';

const filterTodoListState = selector({
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