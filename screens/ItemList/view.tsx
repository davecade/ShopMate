import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Heading, VStack} from '@gluestack-ui/themed';
import {ItemCard} from '../../components/ItemCard/ItemCard';
import {ShoppingItem} from '../../types';

type ItemListViewProps = {
  shoppingList: ShoppingItem[];
  onPress: (id: number) => void;
};

export const ItemListView = ({shoppingList, onPress}: ItemListViewProps) => {
  return (
    <View style={styles.container}>
      <VStack space="3xl">
        <Heading style={styles.label}>Shopping List</Heading>
        {shoppingList?.map((item, index) => {
          return (
            <ItemCard
              key={index}
              item={item}
              onPress={() => onPress(item.id)}
            />
          );
        })}
      </VStack>
    </View>
  );
};
