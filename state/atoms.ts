import {atom} from 'recoil';

const keys = {
  shoppingLists: '@ShopMate_selectedListId',
};

export const selectedListIdAtom = atom<string>({
  key: keys.shoppingLists,
  default: '',
});
