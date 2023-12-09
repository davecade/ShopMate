import React, {useEffect, useMemo} from 'react';
import {ItemListView} from './view';
import {
  useRecoilState,
  useSetRecoilState,
  useRecoilValueLoadable,
} from 'recoil';
import {selectedListIdAtom, selectedListStateAtom} from '../../state/atoms';
import {ShoppingList} from '../../types';
import {getAllListsQuery, getListByIdQuery} from '../../state/selectors';
import {updateListAsync} from '../../services/api';

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
  const setShoppingLists = useSetRecoilState<ShoppingList[]>(getAllListsQuery);
  const [selectedListId, setSelectedListId] =
    useRecoilState<string>(selectedListIdAtom);
  const selectedListLoadable = useRecoilValueLoadable(
    getListByIdQuery(selectedListId),
  );

  const selectedListData = selectedListLoadable.contents;
  const [selectedListState, setSelectedListState] =
    useRecoilState<ShoppingList>(selectedListStateAtom);

  const selectedShoppingListItems = useMemo(() => {
    return selectedListState?.items || [];
  }, [selectedListState]);
  const completedItems = useMemo(() => {
    return (
      selectedShoppingListItems?.filter(item => item.isBought)?.length || 0
    );
  }, [selectedShoppingListItems]);
  const isLoading = selectedListLoadable.state === 'loading';
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

  const onDeleteItem = (selectedItemId: string = '') => {
    setSelectedListState(prevState => {
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
    setSelectedListState(prevState => {
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
    setSelectedListState(prevState => {
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
    setTimeout(() => {
      discardChanges();
    }, 500); // so that it doesn't change too fast
  };

  useEffect(() => {
    setSelectedListId(preselectedListId);
  }, [setSelectedListId, preselectedListId]);

  useEffect(() => {
    if (!isLoading && selectedListData) {
      setSelectedListState(selectedListData);
    }
  }, [isLoading, selectedListData, setSelectedListState]);

  const discardChanges = () => {
    setSelectedListState(selectedListData);
    setIsDirty(false);
  };

  return (
    <ItemListView
      listName={selectedListState?.name || ''}
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
