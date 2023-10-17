import React from 'react';
import {ItemListView} from './view';
import {useSetRecoilState} from 'recoil';
import {shoppingListsAtom} from '../../state/atoms';
import {ShoppingList} from '../../types';

type ItemListtContainerProps = {
  navigateToPreviousPage: () => void;
};

export const ItemListContainer = ({
  navigateToPreviousPage,
}: ItemListtContainerProps) => {
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

  const goBack = () => {
    navigateToPreviousPage();
  };

  return <ItemListView goBack={goBack} onPressCreate={onPressCreate} />;
};
