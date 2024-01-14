import React, {useEffect, useState} from 'react';
import {EditListView} from './view';
import {ShoppingList} from '../../types';
import {useShoppingLists} from '../../hooks/useShoppingLists';

type EditListContainerProps = {
  preselectedListId: string;
  navigateToPreviousPage: () => void;
};

export const EditListContainer = ({
  preselectedListId,
  navigateToPreviousPage,
}: EditListContainerProps) => {
  const {updateList, isLoading, getListById, selectedList, setSelectedList} =
    useShoppingLists();
  const [listNameValue, setListNameValue] = useState('');
  const [showInputError, setShowInputError] = useState(false);

  useEffect(() => {
    getListById(preselectedListId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preselectedListId]);

  const onPressSave = async (title: string) => {
    if (!title) {
      return;
    }

    const updatedListData: ShoppingList = {
      ...selectedList,
      name: title,
    };

    await updateList(updatedListData);
    navigateToPreviousPage();
    resetValues();
  };

  const onPressCancel = () => {
    navigateToPreviousPage();
    resetValues();
  };

  const resetValues = () => {
    setListNameValue('');
    setShowInputError(false);
    setSelectedList({
      _id: '',
      name: '',
      items: [],
    });
  };

  useEffect(() => {
    setListNameValue(selectedList.name);
  }, [selectedList]);

  return (
    <EditListView
      isLoading={isLoading}
      listNameValue={listNameValue}
      showInputError={showInputError}
      setListNameValue={setListNameValue}
      setShowInputError={setShowInputError}
      onPressCancel={onPressCancel}
      onPressSave={onPressSave}
    />
  );
};
