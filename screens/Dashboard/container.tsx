import React, {useState} from 'react';
import {DashboardView} from './view';
import {useRecoilState} from 'recoil';
import {getAllListsQuery} from '../../state/selectors';
import {deleteListAsync} from '../../services/api';
import {ShoppingList} from '../../types';

type DashboardContainerProps = {
  navigateToCreateList: () => void;
  navigateToItemList: (listId: string) => void;
};

export const DashboardContainer = ({
  navigateToCreateList,
  navigateToItemList,
}: DashboardContainerProps) => {
  const trolleyImage = require('../../assets/images/trolley.png');
  const [shoppingLists, setShoppingLists] =
    useRecoilState<ShoppingList[]>(getAllListsQuery);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedListIdToDelete, setSelectedListIdToDelete] = useState<
    string | undefined
  >('');

  const onCreateList = () => {
    navigateToCreateList();
  };

  const onPressList = (listId: string = '') => {
    navigateToItemList(listId);
  };

  const onCloseDialog = () => {
    setShowDeleteDialog(false);
    setSelectedListIdToDelete('');
  };

  const onDeleteList = async (listId: string = '') => {
    const deletedList = await deleteListAsync(listId);
    if (deletedList) {
      setShoppingLists(prev =>
        prev.filter(list => list._id !== deletedList._id),
      );
    }
    onCloseDialog();
  };

  return (
    <DashboardView
      onCreateList={onCreateList}
      onPressList={onPressList}
      onDeleteList={onDeleteList}
      setShowDeleteDialog={setShowDeleteDialog}
      onCloseDeleteDialog={onCloseDialog}
      setSelectedListIdToDelete={setSelectedListIdToDelete}
      showDeleteDialog={showDeleteDialog}
      selectedListIdToDelete={selectedListIdToDelete}
      image={trolleyImage}
      shoppingLists={shoppingLists ? shoppingLists : []}
    />
  );
};
