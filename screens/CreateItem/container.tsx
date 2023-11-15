import React from 'react';
import {CreateItemView} from './view';
import {ShoppingItem, ShoppingList} from '../../types';
import {addItemAsync} from '../../services/api';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {selectedListIdAtom} from '../../state/atoms';
import {getAllListsQuery} from '../../state/selectors';

type CreateItemContainerProps = {
  navigateToPreviousPage: () => void;
};

export const CreateItemContainer = ({
  navigateToPreviousPage,
}: CreateItemContainerProps) => {
  const selectedListId = useRecoilValue<string>(selectedListIdAtom);
  const setShoppingLists = useSetRecoilState<ShoppingList[]>(getAllListsQuery);

  const onPressAdd = async (item: ShoppingItem) => {
    const newItemData: ShoppingItem = {
      ...item,
      isBought: false,
      quantity: 1,
    };

    const newListResponse = await addItemAsync(selectedListId, newItemData);

    if (newListResponse) {
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

  return <CreateItemView onPressAdd={onPressAdd} />;
};
