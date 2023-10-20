import {View, Text} from 'react-native';
import React from 'react';
import {notStartedColor, styles} from './styles';
import {ShoppingItem} from '../../types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CheckBox} from '../CheckBox/CheckBox';

type ItemCardProps = {
  item: ShoppingItem;
  onPress: () => void;
};

export const ItemCard = ({item, onPress}: ItemCardProps) => {
  const {name, quantity, price, isBought, id} = item;
  return (
    <TouchableOpacity
      style={[styles.card, {borderColor: notStartedColor}]}
      onPress={() => onPress(id)}>
      <View>
        <Text style={styles.listName}>{name}</Text>
      </View>
      <CheckBox isChecked={isBought} />
    </TouchableOpacity>
  );
};
