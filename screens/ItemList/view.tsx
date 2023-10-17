import {View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Heading, VStack} from '@gluestack-ui/themed';
import {ItemCard} from '../../components/ItemCard/ItemCard';

type ItemListViewProps = {
  goBack: () => void;
  onPressCreate: (title: string) => void;
};

export const ItemListView = ({goBack, onPressCreate}: ItemListViewProps) => {
  const [listNameValue, setListNameValue] = useState('');

  return (
    <View style={styles.container}>
      <VStack space="3xl">
        <Heading style={styles.label}>Shopping List</Heading>
        <ItemCard title={listNameValue} items={[]} onPress={() => {}} />
      </VStack>
    </View>
  );
};
