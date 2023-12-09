import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ShoppingItem} from '../../types';
import {CheckBox} from '../CheckBox/CheckBox';
import {Icon, Text, TrashIcon, VStack} from '@gluestack-ui/themed';
import {globalStyles} from '../../styles/globalStyles';

type ItemCardProps = {
  item: ShoppingItem;
  onPress: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
  onDelete: () => void;
};

export const ItemCard = ({
  item,
  onPress,
  onIncrement,
  onDecrement,
  onDelete,
}: ItemCardProps) => {
  const {name, quantity, price, isBought} = item;
  const strikeThroughStyle = isBought && styles.strikeThrough;

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.deleteIcon} onPress={onDelete}>
        <Icon
          as={TrashIcon}
          w="$4"
          h="$4"
          color={'$warmGray400'}
          fill={'$warmGray400'}
        />
      </TouchableOpacity>
      <View style={globalStyles.flex}>
        <Text style={[styles.listName, strikeThroughStyle]}>{name}</Text>
        <VStack alignItems="flex-start" paddingTop="$2">
          <Text style={[styles.itemPrice, strikeThroughStyle]}>{`$${(
            price * quantity
          ).toFixed(2)}`}</Text>
        </VStack>
      </View>
      <View style={[styles.quantityContainer]}>
        <TouchableOpacity
          onPress={onDecrement}
          disabled={isBought || quantity === 1}>
          <Text style={[styles.incrementDecrement, strikeThroughStyle]}>-</Text>
        </TouchableOpacity>
        <Text
          style={[
            styles.text,
            styles.quantityText,
            strikeThroughStyle,
          ]}>{` x ${quantity} `}</Text>
        <TouchableOpacity onPress={onIncrement} disabled={isBought}>
          <Text style={[styles.incrementDecrement, strikeThroughStyle]}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.checkBox}>
        <CheckBox isChecked={isBought} />
      </TouchableOpacity>
    </View>
  );
};
