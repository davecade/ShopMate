import React, {useEffect, useMemo, useState} from 'react';
import {ItemListView} from './view';
import {useShoppingLists} from '../../hooks/useShoppingLists';
import {useRecoilState} from 'recoil';
import {selectedListTempStateAtom} from '../../state/atoms';

type ItemListtContainerProps = {
  preselectedListId: string;
  navigateToCreateItem: () => void;
  navigateToPreviousPage: () => void;
  isDirty: boolean;
  setIsDirty: (isDirty: boolean) => void;
  showDiscardDialog: boolean;
  setShowDiscardDialog: (show: boolean) => void;
};

const emptyImage = require('../../assets/images/empty.png');

export const ItemListContainer = ({
  preselectedListId,
  navigateToCreateItem,
  navigateToPreviousPage,
  isDirty,
  setIsDirty,
  showDiscardDialog,
  setShowDiscardDialog,
}: ItemListtContainerProps) => {
  const {isLoading, updateList, getListById, selectedList} = useShoppingLists();
  const [selectedListTempState, setSelectedListTempState] = useRecoilState(
    selectedListTempStateAtom,
  );

  useEffect(() => {
    if (!isLoading && selectedList) {
      setSelectedListTempState(selectedList);
    }
  }, [selectedList]);

  const selectedShoppingListItems = useMemo(() => {
    return selectedListTempState?.items || [];
  }, [selectedListTempState]);
  const completedItems = useMemo(() => {
    return (
      selectedShoppingListItems?.filter(item => item.isChecked)?.length || 0
    );
  }, [selectedShoppingListItems]);

  const totalItems = selectedShoppingListItems?.length || 0;
  const totalCost = useMemo(() => {
    return Number(
      selectedShoppingListItems
        .reduce((acc, item) => {
          const {price, quantity} = item;
          if (price && quantity) {
            return acc + price * quantity;
          }
          return acc;
        }, 0)
        .toFixed(2),
    );
  }, [selectedShoppingListItems]);

  const onPressItem = (selectedItemId: string = '') => {
    setSelectedListTempState(prevState => {
      const updatedItems = prevState.items.map(item => {
        if (item._id === selectedItemId) {
          return {
            ...item,
            isChecked: !item.isChecked,
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

  const onDeleteItem = (selectedItemId: string = '') => {
    setSelectedListTempState(prevState => {
      const updatedItems = prevState.items.filter(
        item => item._id !== selectedItemId,
      );
      return {
        ...prevState,
        items: updatedItems,
      };
    });
    setIsDirty(true);
  };

  const onPressIncrement = (selectedItemId: string = '') => {
    setSelectedListTempState(prevState => {
      const updatedItems = prevState.items.map(item => {
        if (item._id === selectedItemId) {
          return {
            ...item,
            quantity: item.quantity + 1,
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

  const onPressDecrement = (selectedItemId: string = '') => {
    setSelectedListTempState(prevState => {
      const updatedItems = prevState.items.map(item => {
        if (item._id === selectedItemId) {
          return {
            ...item,
            quantity: item.quantity - 1,
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
    await updateList(selectedListTempState);
    navigateToPreviousPage();
    discardChanges();
  };

  useEffect(() => {
    getListById(preselectedListId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSelectedListTempState(selectedList);
  }, [selectedList]);

  const discardChanges = () => {
    getListById(preselectedListId);
    setIsDirty(false);
  };

  return (
    <ItemListView
      listName={selectedListTempState?.name || ''}
      totalItems={totalItems}
      totalCost={totalCost}
      totalCompletedItems={completedItems}
      listItems={selectedShoppingListItems}
      isLoading={isLoading}
      image={emptyImage}
      showDiscardDialog={showDiscardDialog}
      isDirty={isDirty}
      setShowDiscardDialog={setShowDiscardDialog}
      onPressItem={onPressItem}
      onPressIncrement={onPressIncrement}
      onPressDecrement={onPressDecrement}
      onDeleteItem={onDeleteItem}
      saveChanges={saveChanges}
      discardChanges={discardChanges}
      navigateToCreateItem={navigateToCreateItem}
      navigateToPreviousPage={navigateToPreviousPage}
    />
  );
};
