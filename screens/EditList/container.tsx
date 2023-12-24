import React, {useMemo} from 'react';
import {EditListView} from './view';
import {useRecoilValueLoadable, useSetRecoilState} from 'recoil';
import {ShoppingList} from '../../types';
import {updateListAsync} from '../../services/api';
import {getAllListsQuery, getListByIdQuery} from '../../state/selectors';

type EditListContainerProps = {
  preselectedListId: string;
  navigateToPreviousPage: () => void;
};

export const EditListContainer = ({
  preselectedListId,
  navigateToPreviousPage,
}: EditListContainerProps) => {
  const setShoppingLists = useSetRecoilState<ShoppingList[]>(getAllListsQuery);
  const selectedListLoadable = useRecoilValueLoadable(
    getListByIdQuery(preselectedListId),
  );
  const currentListName = useMemo(() => {
    return selectedListLoadable.contents?.name || '';
  }, [selectedListLoadable]);

  const onPressSave = async (title: string) => {
    if (!title) {
      return;
    }

    const updatedListData: ShoppingList = {
      ...selectedListLoadable.contents,
      name: title,
    };

    const updatedListResponse = await updateListAsync(updatedListData);
    setShoppingLists(prevLists => [...prevLists, updatedListResponse]);
    navigateToPreviousPage();
  };

  const onPressCancel = () => {
    navigateToPreviousPage();
  };

  return (
    <EditListView
      currentListName={currentListName}
      onPressCancel={onPressCancel}
      onPressSave={onPressSave}
    />
  );
};
