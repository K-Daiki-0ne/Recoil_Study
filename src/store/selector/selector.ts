import { selector } from 'recoil';
import { textState } from '../atom/atom';

export const textCountState = selector({
  key: 'textCount',
  get: ({ get }) => {
    const text: string = get(textState);
    return text.length
  }
})