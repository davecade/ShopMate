import {View, Text} from 'react-native';
import React from 'react';
import {notStartedColor, styles} from './styles';
import {ShoppingItem} from '../../types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ProgressCircle from '../ProgressCircle/ProgressCircle';

type ListCardProps = {
  title: string;
  items: ShoppingItem[];
};

export const ListCard = ({title, items}: ListCardProps) => {
  const totalItems = items?.length || 0;
  const completedItems = items?.filter(item => item.isBought).length;

  return (
    <TouchableOpacity style={[styles.card, {borderColor: notStartedColor}]}>
      <View>
        <Text style={styles.listName}>{title}</Text>
      </View>
      <ProgressCircle
        total={totalItems}
        completed={completedItems}
        radius={25}
        strokeWidth={5}
      />
    </TouchableOpacity>
  );
};
