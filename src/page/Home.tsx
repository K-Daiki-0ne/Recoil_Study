import React from 'react';
import { TodoList } from '../components/TodoList/TodoList';
import { Container } from '@material-ui/core';
import { RecoilRoot } from 'recoil';

export function Home() {
  return (
    <RecoilRoot>
      <Container
        maxWidth='xs'
        fixed
      >
        <TodoList />
      </Container>
    </RecoilRoot>
  );
}