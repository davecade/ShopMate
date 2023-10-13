import React from 'react';
import {CreateListView} from './view';
import {useSetRecoilState} from 'recoil';
import {shoppingListsAtom} from '../../state/atoms';
import {ShoppingList} from '../../types';

type CreateListContainerProps = {
  navigateToPreviousPage: () => void;
};

export const CreateListContainer = ({
  navigateToPreviousPage,
}: CreateListContainerProps) => {
  const setShoppingLists = useSetRecoilState(shoppingListsAtom);
  const onPressCreate = (title: string) => {
    const newShoppingList: ShoppingList = {
      id: Date.now(),
      name: title,
      items: [],
    };
    setShoppingLists(prev => [...prev, newShoppingList]);
    navigateToPreviousPage();
  };
  const onPressCancel = () => {
    navigateToPreviousPage();
  };

  return (
    <CreateListView
      onPressCancel={onPressCancel}
      onPressCreate={onPressCreate}
    />
  );
};
