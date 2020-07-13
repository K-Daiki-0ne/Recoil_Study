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

  const classes = useStyle();

  return (
    <div>
      <Paper className={classes.paper}>
        Total items: {totalNum}
      </Paper>
      <Paper className={classes.paper}>
        Items Completed: {totalCompletedNum}
      </Paper>
      <Paper className={classes.paper}>
        Items Not Completes: {totalUnCompletedNum}
      </Paper>
      <Paper>
        Percent Completed: {formattedPercentCompleted}
      </Paper>
    </div>
  )
}