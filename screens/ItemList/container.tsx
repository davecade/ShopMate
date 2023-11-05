import React, {useEffect, useState} from 'react';
import {ItemListView} from './view';
import {useRecoilValue, useRecoilState} from 'recoil';
import {selectedListIdAtom} from '../../state/atoms';
import {ShoppingList} from '../../types';
import {oneListQuery} from '../../state/selectors';

type ItemListtContainerProps = {
  preselectedListId: string;
};

export const ItemListContainer = ({
  preselectedListId,
}: ItemListtContainerProps) => {
  const [selectedListId, setSelectedListId] =
    useRecoilState<string>(selectedListIdAtom);
  const selectedListData = useRecoilValue<ShoppingList>(
    oneListQuery(selectedListId),
  );
  const [selectedListState, setSelectedListState] =
    useState<ShoppingList>(selectedListData);
  const selectedShoppingListItems = selectedListState?.items || [];
  const completedItems =
    selectedShoppingListItems?.filter(item => item.isBought)?.length || 0;
  const totalItems = selectedShoppingListItems?.length || 0;

  const onPressItem = (selectedItemId: string) => {
    setSelectedListState(prevState => {
      const updatedItems = prevState.items.map(item => {
        if (item._id === selectedItemId) {
          return {
            ...item,
            isBought: !item.isBought,
          };
        }
        return item;
      });
      return {
        ...prevState,
        items: updatedItems,
      };
    });
  };

  useEffect(() => {
    setSelectedListId(preselectedListId);
  }, [setSelectedListId, preselectedListId]);

  useEffect(() => {
    setSelectedListState(selectedListData);
  }, [selectedListData]);

  return (
    <ItemListView
      listName={selectedListState?.name || ''}
      totalItems={totalItems}
      totalCompletedItems={completedItems}
      listItems={selectedShoppingListItems}
      onPress={onPressItem}
    />
  );
};
