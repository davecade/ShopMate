import React from 'react';
import {CreateListView} from './view';
import {useSetRecoilState} from 'recoil';
import {ShoppingList} from '../../types';
import {createListAsync} from '../../services/api';
import {getAllListsQuery} from '../../state/selectors';

type CreateListContainerProps = {
  navigateToPreviousPage: () => void;
};

export const CreateListContainer = ({
  navigateToPreviousPage,
}: CreateListContainerProps) => {
  const setShoppingLists = useSetRecoilState<ShoppingList[]>(getAllListsQuery);

  const onPressCreate = async (title: string) => {
    const newListData: ShoppingList = {
      name: title,
      items: [],
    };

    const newListResponse = await createListAsync(newListData);
    setShoppingLists(prevLists => [...prevLists, newListResponse]);
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
