import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../../store/selector/selector';
import { Paper } from '@material-ui/core';
import { useStyle } from './style';

export function TodoListStats() {
  const { 
    totalNum,
    totalCompletedNum,
    totalUnCompletedNum,
    percentCompleted
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted: number = Math.round(percentCompleted * 100);

  return (
    <div>
      <Paper>
        Total items: {totalNum}
      </Paper>
      <Paper>
        Items Completed: {totalCompletedNum}
      </Paper>
      <Paper>
        Items Not Completes: {totalUnCompletedNum}
      </Paper>
      <Paper>
        Percent Completed: {formattedPercentCompleted}
      </Paper>
    </div>
  )
}