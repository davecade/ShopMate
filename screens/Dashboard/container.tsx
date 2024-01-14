import React, {useState} from 'react';
import {DashboardView} from './view';
import {useShoppingLists} from '../../hooks/useShoppingLists';

type DashboardContainerProps = {
  navigateToCreateList: () => void;
  navigateToEditList: (listId: string) => void;
  navigateToItemList: (listId: string) => void;
};

export const DashboardContainer = ({
  navigateToCreateList,
  navigateToEditList,
  navigateToItemList,
}: DashboardContainerProps) => {
  const trolleyImage = require('../../assets/images/trolley.png');
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedListIdToDelete, setSelectedListIdToDelete] = useState<
    string | undefined
  >('');
  const {isLoading, deleteListById, shoppingLists} = useShoppingLists();

  const onCreateList = () => {
    navigateToCreateList();
  };

  const onEditList = (listId: string = '') => {
    navigateToEditList(listId);
  };

  const onPressList = (listId: string = '') => {
    navigateToItemList(listId);
  };

  const onCloseDialog = () => {
    setShowDeleteDialog(false);
    setSelectedListIdToDelete('');
  };

  const onDeleteList = async (listId: string = '') => {
    deleteListById(listId);
    onCloseDialog();
  };

  return (
    <DashboardView
      isLoading={isLoading}
      onCreateList={onCreateList}
      onEditList={onEditList}
      onPressList={onPressList}
      onDeleteList={onDeleteList}
      setShowDeleteDialog={setShowDeleteDialog}
      onCloseDeleteDialog={onCloseDialog}
      setSelectedListIdToDelete={setSelectedListIdToDelete}
      showDeleteDialog={showDeleteDialog}
      selectedListIdToDelete={selectedListIdToDelete}
      image={trolleyImage}
      shoppingLists={shoppingLists || []}
    />
  );
};
