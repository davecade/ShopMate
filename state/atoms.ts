import {atom} from 'recoil';
import {shoppingListsData} from '../data';
import {ShoppingList} from '../types';

const keys = {
  shoppingLists: '@ShopMate_shoppingLists',
};

export const shoppingListsAtom = atom<ShoppingList[]>({
  key: keys.shoppingLists,
  default: shoppingListsData,
});
