import {atom} from 'recoil';
import {ShoppingItem, ShoppingList} from '../types';

const keys = {
  allLists: '@ShopMate_allLists',
  selectedListId: '@ShopMate_selectedListId',
  allItems: 'ShopMate_allItems',
};

export const allListsAtom = atom<ShoppingList[]>({
  key: keys.allLists,
  default: [],
});

export const selectedListIdAtom = atom<string>({
  key: keys.selectedListId,
  default: '',
});

export const allItemsAtom = atom<ShoppingItem[]>({
  key: keys.allItems,
  default: [],
});
