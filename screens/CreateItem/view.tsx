import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useRecoilValue} from 'recoil';
import {ShoppingItem} from '../../types';
import {getAllItemsQuery} from '../../state/selectors';
import {FilterableList} from '../../components/FilterableList/FilterableList';

type CreateItemViewProps = {
  onPressAdd: (item: ShoppingItem) => void;
};

export const CreateItemView = ({onPressAdd}: CreateItemViewProps) => {
  const allShoppingItems = useRecoilValue<ShoppingItem[]>(getAllItemsQuery);

  return (
    <View style={styles.container}>
      <FilterableList list={allShoppingItems} onAdd={onPressAdd} />
    </View>
  );
};
