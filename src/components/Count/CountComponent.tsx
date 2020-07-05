import React from 'react';
import { useRecoilValue } from 'recoil';
import { textCountState } from '../../store/index';

export function CountComponent() {
  const count = useRecoilValue(textCountState);

  return (
    <>
      Text Count: {count}
    </>
  )
}