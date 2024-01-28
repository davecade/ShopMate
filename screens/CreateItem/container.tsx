import React, {useMemo} from 'react';
import {CreateItemView} from './view';
import {ShoppingItem, ShoppingList} from '../../types';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {
  allItemsAtom,
  hasCurrentListChangedAtom,
  selectedListStateAtom,
  selectedListTempStateAtom,
} from '../../state/atoms';

type CreateItemContainerProps = {
  navigateToPreviousPage: () => void;
};

export const CreateItemContainer = ({
  navigateToPreviousPage,
}: CreateItemContainerProps) => {
  const allShoppingItems = useRecoilValue<ShoppingItem[]>(allItemsAtom);
  const [selectedListTempState, setSelectedListTempState] = useRecoilState(
    selectedListTempStateAtom,
  );
  const setIsDirty = useSetRecoilState(hasCurrentListChangedAtom);

  const selectableItems = useMemo(() => {
    if (selectedListTempState?._id) {
      return allShoppingItems.filter(item => {
        if (!selectedListTempState) {
          return false;
        }
        return !selectedListTempState.items.some(
          listItem => listItem._id === item._id,
        );
      });
    }
    return [];
  }, [selectedListTempState, allShoppingItems]);

  const onPressAdd = async (item: ShoppingItem) => {
    const newItemData: ShoppingItem = {
      ...item,
      isChecked: false,
      quantity: 1,
    };

    if (newItemData) {
      setSelectedListTempState(prev => {
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
