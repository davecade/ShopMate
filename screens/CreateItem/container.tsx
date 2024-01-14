import React, {useMemo} from 'react';
import {CreateItemView} from './view';
import {ShoppingItem, ShoppingList} from '../../types';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {
  allItemsAtom,
  hasCurrentListChangedAtom,
  selectedListStateAtom,
} from '../../state/atoms';

type CreateItemContainerProps = {
  navigateToPreviousPage: () => void;
};

export const CreateItemContainer = ({
  navigateToPreviousPage,
}: CreateItemContainerProps) => {
  const allShoppingItems = useRecoilValue<ShoppingItem[]>(allItemsAtom);
  const [selectedListState, setSelectedListState] =
    useRecoilState<ShoppingList>(selectedListStateAtom);
  const setIsDirty = useSetRecoilState(hasCurrentListChangedAtom);

  const selectableItems = useMemo(() => {
    if (selectedListState?._id) {
      return allShoppingItems.filter(item => {
        if (!selectedListState) {
          return false;
        }
        return !selectedListState.items.some(
          listItem => listItem._id === item._id,
        );
      });
    }
    return [];
  }, [selectedListState, allShoppingItems]);

  const onPressAdd = async (item: ShoppingItem) => {
    const newItemData: ShoppingItem = {
      ...item,
      isChecked: false,
      quantity: 1,
    };

    if (newItemData) {
      setSelectedListState(prev => {
        return {
          ...prev,
          items: [...prev.items, newItemData],
        };
      });
    }

    setIsDirty(true);
    navigateToPreviousPage();
  };

  return (
    <CreateItemView selectableItems={selectableItems} onPressAdd={onPressAdd} />
  );
};
