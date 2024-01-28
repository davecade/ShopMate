import {atom} from 'recoil';
import {ShoppingItem, ShoppingList} from '../types';

const keys = {
  allLists: '@ShopMate_allLists',
  selectedListId: '@ShopMate_selectedListId',
  selectedListState: '@ShopMate_selectedListState',
  selectedListTempState: '@ShopMate_selectedListTempState',
  allItems: 'ShopMate_allItems',
  hasCurrentListChanged: '@ShopMate_hasCurrentListChanged',
};

export const allListsAtom = atom<ShoppingList[]>({
  key: keys.allLists,
  default: [],
});

export const selectedListIdAtom = atom<string>({
  key: keys.selectedListId,
  default: '',
});

// For the saved list
export const selectedListStateAtom = atom<ShoppingList>({
  key: keys.selectedListState,
  default: {
    _id: '',
    name: '',
    items: [],
  },
});

// For the list being edited before saving
export const selectedListTempStateAtom = atom<ShoppingList>({
  key: keys.selectedListTempState,
  default: {
    _id: '',
    name: '',
    items: [],
  },
});

export const allItemsAtom = atom<ShoppingItem[]>({
  key: keys.allItems,
  default: [],
});

export const hasCurrentListChangedAtom = atom<boolean>({
  key: keys.hasCurrentListChanged,
  default: false,
});
