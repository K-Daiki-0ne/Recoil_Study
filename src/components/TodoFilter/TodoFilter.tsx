import React from 'react';
import { useState } from 'react';
import { 
  Select,
  MenuItem,
  InputLabel
 } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../store/atom/atom';
import { useStyle } from './style';

export function TodoFilter() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const classes = useStyle();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilter(event.target.value as string);
  }

  return (
    <div className={classes.root}>
      <InputLabel
        id='todo-input-label'        
      >
        Select Todo List
      </InputLabel>
      <br></br>
      <Select
        labelId='todo-input-label'
        value={filter}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        onChange={handleChange}
        className={classes.select}
      >
        <MenuItem value='Show All'>
          All
        </MenuItem>

        <MenuItem value='Show Completed'>
          Completed
        </MenuItem>

        <MenuItem value='Show Uncompleted'>
          Uncompleted
        </MenuItem>
      </Select>
    </div>
  )
}
