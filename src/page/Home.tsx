import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../store/atom/atom';
import CountComponent from '../components/Count/CountComponent';

export function Home() {
  const [text, setText] = useRecoilState(textState);

  const getText = (event: any) => {
    setText(event.target.value);
  }

  return (
    <div>
      <input 
        type='text' 
        value={text} 
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => getText(event)} 
      />
      <br />
      <p>Echo: {text}</p>
      <CountComponent />
    </div>
  );
}