import React from 'react';
import { useState } from 'react';
import { 
  Select,
  MenuItem,
  InputLabel
 } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../store/atom/atom';

export function TodoFilter() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useRecoilState(todoListFilterState);

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
    <div>
      <InputLabel
        id='todo-input-label'        
      >
        Select Todo List
      </InputLabel>
      <Select
        labelId='todo-input-label'
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        onChange={handleChange}
      >
        <MenuItem value='Show All'>
          All
        </MenuItem>

        <MenuItem value='Show Completed'>
          Completed
        </MenuItem>

        <MenuItem value='Show Completed'>
          Uncompleted
        </MenuItem>
      </Select>
    </div>
  )
}
