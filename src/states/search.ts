import { atom } from 'recoil';

export const searchKeywordState = atom<string>({
  key: 'searchKeyword',
  default: '',
});
