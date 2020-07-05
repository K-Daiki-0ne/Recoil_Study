import React from 'react';
import { useState } from 'react';
import { useTodo } from '../../hooks/useTodo';

export function TodoItemCreater() {
  const [inputValue, setInputValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }
  const onClick = () => {
    const addTodo = useTodo();
    addTodo(inputValue);
    setInputValue('');
  }

  return (
    <>
      <input 
        type='text'
        value='inputValue'
        onChange={onChange}
      />
      <button
        onClick={onClick}
      >
        Add
      </button>
    </>
  )
}