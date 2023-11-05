import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ShoppingItem} from '../../types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CheckBox} from '../CheckBox/CheckBox';
import {HStack, Text} from '@gluestack-ui/themed';

type ItemCardProps = {
  item: ShoppingItem;
  onPress: () => void;
};

export const ItemCard = ({item, onPress}: ItemCardProps) => {
  console.log('item', item);
  const {name, quantity, price, isBought, id} = item;

  return (
    <TouchableOpacity style={[styles.card]} onPress={() => onPress()}>
      <View>
        <Text style={[styles.listName, isBought && styles.strikeThrough]}>
          {name}
        </Text>
      </View>
      <HStack direction="ltr" gap="$6">
        <Text style={{color: 'white'}}>{`$${price}`}</Text>
        <CheckBox isChecked={isBought} />
      </HStack>
    </TouchableOpacity>
  );
};
