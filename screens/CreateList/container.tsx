import React from 'react';
import {CreateListView} from './view';
import {ShoppingList} from '../../types';
import {useShoppingLists} from '../../hooks/useShoppingLists';

type CreateListContainerProps = {
  navigateToPreviousPage: () => void;
};

export const CreateListContainer = ({
  navigateToPreviousPage,
}: CreateListContainerProps) => {
  const {createList, isLoading} = useShoppingLists();

  const onPressCreate = async (title: string) => {
    if (!title) {
      return;
    }

    const newListData: ShoppingList = {
      name: title,
      items: [],
    };

    await createList(newListData);
    navigateToPreviousPage();
  };
  const onPressCancel = () => {
    navigateToPreviousPage();
  };

  return (
    <CreateListView
      isLoading={isLoading}
      onPressCancel={onPressCancel}
      onPressCreate={onPressCreate}
    />
  );
};
