import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ShoppingItem} from '../../types';
import {FilterableList} from '../../components/FilterableList/FilterableList';

type CreateItemViewProps = {
  selectableItems: ShoppingItem[];
  onPressAdd: (item: ShoppingItem) => void;
};

export const CreateItemView = ({
  selectableItems,
  onPressAdd,
}: CreateItemViewProps) => {
  return (
    <View style={styles.container}>
      <FilterableList list={selectableItems} onAdd={onPressAdd} />
    </View>
  );
};
