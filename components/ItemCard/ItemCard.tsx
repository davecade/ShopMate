import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ShoppingItem} from '../../types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CheckBox} from '../CheckBox/CheckBox';
import {Text, VStack} from '@gluestack-ui/themed';

type ItemCardProps = {
  item: ShoppingItem;
  onPress: () => void;
};

export const ItemCard = ({item, onPress}: ItemCardProps) => {
  console.log('item', item);
  const {name, quantity, price, isBought} = item;

  return (
    <View style={[styles.card]}>
      <View>
        <Text style={[styles.listName, isBought && styles.strikeThrough]}>
          {name} <Text style={styles.text}>{`x ${quantity}`}</Text>
        </Text>
        <VStack alignItems="flex-start" paddingTop="$2">
          <Text style={styles.itemPrice}>{`Price: $${price}`}</Text>
        </VStack>
      </View>
      <TouchableOpacity onPress={onPress}>
        <CheckBox isChecked={isBought} />
      </TouchableOpacity>
    </View>
  );
};
