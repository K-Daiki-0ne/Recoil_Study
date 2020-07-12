import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../../store/selector/selector';
import { Paper } from '@material-ui/core';

export function TodoListStats() {
  const { 
    totalNum,
    totalCompletedNum,
    totalUnCompletedNum,
    percentCompleted
  } = useRecoilValue(todoListStatsState);

  return (
    <div>
      <Paper>
        Total items: {totalNum}
      </Paper>

      <Paper>

      </Paper>
    </div>
  )
}