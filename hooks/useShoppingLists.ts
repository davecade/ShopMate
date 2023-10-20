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

  return {
    shoppingLists,
    setShoppingLists,
    getShoppingListDetailsById,
    getShoppingListItemsById,
    getShoppingListItemDetails,
  };
};
