import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ShoppingItem} from '../../types';

type DashboardListCardProps = {
  title: string;
  items: ShoppingItem[];
};

export const DashboardListCard = ({title, items}: DashboardListCardProps) => {
  const progress = Math.round(
    (items?.filter(item => item.isBought).length / items?.length) * 100,
  );

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.listName}>{title}</Text>
        <Text style={styles.listItems}>{items?.length || 0}</Text>
      </View>
      <View style={styles.progressCircle}>
        <Text style={styles.progressText}>{`${progress}%`}</Text>
      </View>
    </View>
  );
};
