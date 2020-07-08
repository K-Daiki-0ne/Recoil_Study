import React from 'react';
import { useState } from 'react';
import { useTodo } from '../../hooks/useTodo';
import { Button } from '@material-ui/core';

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
      <input 
        type='text'
        value={inputValue}
        onChange={onChange}
      />
      <Button
        onClick={onClick}
      >
        Add
      </Button>
    </>
  )
}