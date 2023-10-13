import {View, Text} from 'react-native';
import React, {useMemo} from 'react';
import {
  completedColor,
  inProgressColor,
  notStartedColor,
  styles,
} from './styles';
import {ShoppingItem} from '../../types';

type DashboardListCardProps = {
  title: string;
  items: ShoppingItem[];
};

export const DashboardListCard = ({title, items}: DashboardListCardProps) => {
  const completedItems = items?.filter(item => item.isBought).length;
  const progress = `${completedItems} / ${items?.length}`;

  const progressColor = useMemo(() => {
    if (completedItems === 0) {
      return notStartedColor;
    }

    if (completedItems === items?.length) {
      return completedColor;
    }

    return inProgressColor;
  }, [completedItems, items?.length]);

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.listName}>{title}</Text>
        <Text style={styles.listItems}>{items?.length || 0}</Text>
      </View>
      <View style={[styles.progressCircle, {borderColor: progressColor}]}>
        <Text style={styles.progressText}>{progress}</Text>
      </View>
    </View>
  );
};
