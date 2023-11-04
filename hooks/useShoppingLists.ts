import {useRecoilState} from 'recoil';
import {shoppingListsAtom} from '../state/atoms';

export const useShoppingLists = () => {
  const [shoppingLists, setShoppingLists] = useRecoilState(shoppingListsAtom);

  const getShoppingListDetailsById = (id: number) => {
    return shoppingLists.find(list => list.id === id);
  };

  const getShoppingListItemsById = (id: number) => {
    return getShoppingListDetailsById(id)?.items || [];
  };

  const getShoppingListItemDetails = (
    ShoppingListId: number,
    itemListId: number,
  ) => {
    return getShoppingListItemsById(ShoppingListId)?.find(
      item => item.id === itemListId,
    );
  };

  const getTotalItemsByListId = (id: number) => {
    return getShoppingListItemsById(id)?.length || 0;
  };

  const getTotalBoughtItemsListId = (id: number) => {
    return getShoppingListItemsById(id)?.filter(item => item.isBought).length;
  };

  return {
    shoppingLists,
    setShoppingLists,
    getShoppingListDetailsById,
    getShoppingListItemsById,
    getShoppingListItemDetails,
    getTotalItemsByListId,
    getTotalBoughtItemsListId,
  };
};
