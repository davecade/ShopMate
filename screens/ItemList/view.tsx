import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Heading, ScrollView, VStack} from '@gluestack-ui/themed';
import {ItemCard} from '../../components/ItemCard/ItemCard';
import {ShoppingItem} from '../../types';
import {ProgressCircle} from '../../components/ProgressCircle/ProgressCircle';
import {globalStyles} from './../../styles/globalStyles';

type ItemListViewProps = {
  listName: string;
  totalItems: number;
  totalCompletedItems: number;
  listItems: ShoppingItem[];
  onPress: (id: string) => void;
};

export const ItemListView = ({
  listName,
  totalItems,
  totalCompletedItems,
  listItems,
  onPress,
}: ItemListViewProps) => {
  return (
    <View style={globalStyles.container}>
      <VStack space="sm">
        <VStack space="lg" style={styles.titleProgressContainer}>
          <Heading style={styles.label}>{listName}</Heading>
          <ProgressCircle
            total={totalItems}
            completed={totalCompletedItems}
            radius={25}
            strokeWidth={5}
          />
        </VStack>
        <ScrollView style={{flex: 1}}>
          <VStack space="sm">
            {listItems?.map(item => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onPress={() => onPress(item._id)}
                />
              );
            })}
          </VStack>
        </ScrollView>
      </VStack>
    </View>
  );
};
