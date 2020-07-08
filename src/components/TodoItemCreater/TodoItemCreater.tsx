import React from 'react';
import { useState } from 'react';
import { useTodo } from '../../hooks/useTodo';
import { 
  Button,
  TextField
 } from '@material-ui/core';
 import SendIcon from '@material-ui/icons/Send';

export function TodoItemCreater() {
  const [inputValue, setInputValue] = useState('');

  const addTodo = useTodo();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }
  const onClick = () => {
    addTodo(inputValue);
    setInputValue('');
  }

  return (
    <>
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
    </>
  )
}

// test aaaaaaa
// dfsafdsfsafdsaf