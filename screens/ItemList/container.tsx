import React, {useEffect, useState} from 'react';
import {ItemListView} from './view';
import {
  useRecoilState,
  useSetRecoilState,
  useRecoilValueLoadable,
} from 'recoil';
import {selectedListIdAtom} from '../../state/atoms';
import {ShoppingList} from '../../types';
import {getAllListsQuery, getListByIdQuery} from '../../state/selectors';
import {updateListAsync} from '../../services/api';

type ItemListtContainerProps = {
  preselectedListId: string;
  navigateToCreateItem: () => void;
  navigateToPreviousPage: () => void;
  setIsDirty: (isDirty: boolean) => void;
  showDiscardDialog: boolean;
  setShowDiscardDialog: (show: boolean) => void;
};

const emptyImage = require('../../assets/images/empty.png');

export const ItemListContainer = ({
  preselectedListId,
  navigateToCreateItem,
  navigateToPreviousPage,
  setIsDirty,
  showDiscardDialog,
  setShowDiscardDialog,
}: ItemListtContainerProps) => {
  const setShoppingLists = useSetRecoilState<ShoppingList[]>(getAllListsQuery);
  const [selectedListId, setSelectedListId] =
    useRecoilState<string>(selectedListIdAtom);
  const selectedListLoadable = useRecoilValueLoadable(
    getListByIdQuery(selectedListId),
  );
  const isLoading = selectedListLoadable.state === 'loading';
  const selectedListData = selectedListLoadable.contents;
  const [selectedListState, setSelectedListState] =
    useState<ShoppingList>(selectedListData);
  const selectedShoppingListItems = selectedListState?.items || [];
  const completedItems =
    selectedShoppingListItems?.filter(item => item.isBought)?.length || 0;
  const totalItems = selectedShoppingListItems?.length || 0;

  const onPressItem = (selectedItemId: string = '') => {
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
    setIsDirty(true);
  };

  const saveChanges = async () => {
    const updatedListResponse = await updateListAsync(selectedListState);

    if (updatedListResponse) {
      setShoppingLists(prev => {
        const newList = prev.find(list => list._id === selectedListId);
        if (newList) {
          return prev.map(list =>
            list._id === selectedListId ? updatedListResponse : list,
          );
        }
        return prev;
      });
    }
    navigateToPreviousPage();
  };

  useEffect(() => {
    setSelectedListId(preselectedListId);
  }, [setSelectedListId, preselectedListId]);

  useEffect(() => {
    setSelectedListState(selectedListData);
  }, [selectedListData]);

  const discardChanges = () => {
    setSelectedListState(selectedListData);
    setIsDirty(false);
    setShowDiscardDialog(false);
    navigateToPreviousPage();
  };

  return (
    <ItemListView
      listName={selectedListState?.name || ''}
      totalItems={totalItems}
      totalCompletedItems={completedItems}
      listItems={selectedShoppingListItems}
      isLoading={isLoading}
      image={emptyImage}
      showDiscardDialog={showDiscardDialog}
      setShowDiscardDialog={setShowDiscardDialog}
      onPressItem={onPressItem}
      saveChanges={saveChanges}
      discardChanges={discardChanges}
      navigateToCreateItem={navigateToCreateItem}
    />
  );
};
