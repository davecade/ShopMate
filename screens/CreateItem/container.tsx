import React, {useMemo} from 'react';
import {CreateItemView} from './view';
import {ShoppingItem, ShoppingList} from '../../types';
import {addItemAsync} from '../../services/api';
import {useRecoilState, useRecoilValue} from 'recoil';
import {selectedListIdAtom} from '../../state/atoms';
import {getAllItemsQuery, getAllListsQuery} from '../../state/selectors';

type CreateItemContainerProps = {
  navigateToPreviousPage: () => void;
};

export const CreateItemContainer = ({
  navigateToPreviousPage,
}: CreateItemContainerProps) => {
  const selectedListId = useRecoilValue<string>(selectedListIdAtom);
  const [shoppingLists, setShoppingLists] =
    useRecoilState<ShoppingList[]>(getAllListsQuery);
  const allShoppingItems = useRecoilValue<ShoppingItem[]>(getAllItemsQuery);

  const selectableItems = useMemo(() => {
    const currentList = shoppingLists.find(list => list._id === selectedListId);

    if (currentList?._id) {
      return allShoppingItems.filter(item => {
        if (!currentList) {
          return false;
        }
        return !currentList.items.some(listItem => listItem._id === item._id);
      });
    }
    return [];
  }, [shoppingLists, allShoppingItems, selectedListId]);

  const onPressAdd = async (item: ShoppingItem) => {
    const newItemData: ShoppingItem = {
      ...item,
      isBought: false,
      quantity: 1,
    };

    const newListResponse = await addItemAsync(selectedListId, newItemData);

    if (newItemData) {
      setShoppingLists(prev => {
        const newList = prev.find(list => list._id === selectedListId);
        if (newList) {
          return prev.map(list =>
            list._id === selectedListId ? newListResponse : list,
          );
        }
        return prev;
      });
    }
    navigateToPreviousPage();
  };

  return (
    <CreateItemView selectableItems={selectableItems} onPressAdd={onPressAdd} />
  );
};
