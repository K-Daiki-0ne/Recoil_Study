import React from 'react';
import { useState } from 'react';
import { useTodo } from '../../hooks/useTodo';
import { 
  Button,
  TextField
 } from '@material-ui/core';
 import SendIcon from '@material-ui/icons/Send';
 import { useStyle } from './style';

export function TodoItemCreater() {
  const [inputValue, setInputValue] = useState('');

  const addTodo = useTodo();

  const classes = useStyle();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }
  const onClick = () => {
    addTodo(inputValue);
    setInputValue('');
  }

  return (
    <>
      <div className={classes.root}>
        <TextField 
          size='medium'
          type='text'
          value={inputValue}
          onChange={onChange}
        />
        <Button
          variant="contained"
          onClick={onClick}
          size='small'
        >
          <SendIcon 
            fontSize='small'
          />
        </Button>
      </div>
    </>
  )
}

// test aaaaaaa
// dfsafdsfsafdsaf