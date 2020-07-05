import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../store/atom/atom';

export function Home() {
  const todoList = useRecoilState(todoListState);
  return (
    <>
      <p>This is Home Component</p>
    </>
  );
}