import React from 'react';
import { TodoList } from '../components/TodoList/TodoList';
import { Container } from '@material-ui/core';

export function Home() {
  return (
    <Container
      maxWidth='xs'
      fixed
    >
      <TodoList />
    </Container>
  );
}