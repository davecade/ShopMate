import React from 'react';
import {ItemListView} from './view';
import {ShoppingItem, ShoppingList} from '../../types';
import {useShoppingLists} from '../../hooks/useShoppingLists';

type ItemListtContainerProps = {
  selectedListId: number;
};

export const ItemListContainer = ({
  selectedListId,
}: ItemListtContainerProps) => {
  const {
    shoppingLists,
    setShoppingLists,
    getShoppingListDetailsById,
    getShoppingListItemDetails,
    getShoppingListItemsById,
  } = useShoppingLists();

  const selectedShoppingListDetails =
    getShoppingListDetailsById(selectedListId);
  const selectedShoppingListItems = getShoppingListItemsById(selectedListId);

  const onPressItem = (selectedItemId: number) => {
    const selectedItem = getShoppingListItemDetails(
      selectedListId,
      selectedItemId,
    );

    if (selectedShoppingListDetails && selectedItem) {
      const updatedItem: ShoppingItem = {
        ...selectedItem,
        isBought: !selectedItem.isBought,
      };

      const updatedItemList = selectedShoppingListItems.map(item => {
        if (item.id === selectedItemId) {
          return updatedItem;
        }
        return item;
      });

      const updatedShoppingList: ShoppingList = {
        ...selectedShoppingListDetails,
        items: updatedItemList,
      };

      const updatedShoppingLists = shoppingLists.map(list => {
        if (list.id === selectedListId) {
          return updatedShoppingList;
        }
        return list;
      });

      setShoppingLists(updatedShoppingLists);
    }
  };

  return (
    <ItemListView
      shoppingList={selectedShoppingListItems}
      onPress={onPressItem}
    />
  );
};
