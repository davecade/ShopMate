import {atom} from 'recoil';
import {ShoppingList} from '../types';

const keys = {
  allLists: '@ShopMate_allLists',
  selectedListId: '@ShopMate_selectedListId',
};

export const allListsAtom = atom<ShoppingList[]>({
  key: keys.allLists,
  default: [],
});

export const selectedListIdAtom = atom<string>({
  key: keys.selectedListId,
  default: '',
});
