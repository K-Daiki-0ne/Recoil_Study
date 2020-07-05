import React from 'react';
import { useRecoilValue } from 'recoil';
import { textCountState } from '../../store/selector/selector';

function CountComponent() {
  const count = useRecoilValue(textCountState);

  return (
    <>
      Text Count: {count}
    </>
  )
}

export default CountComponent