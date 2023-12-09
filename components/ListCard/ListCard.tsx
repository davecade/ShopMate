import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ShoppingItem} from '../../types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ProgressCircle} from '../ProgressCircle/ProgressCircle';
import {Icon, TrashIcon} from '@gluestack-ui/themed';
import {horizontalScale} from '../../styles/scaling';

type ListCardProps = {
  title: string;
  items: ShoppingItem[];
  onPress: () => void;
  onDelete: () => void;
};

export const ListCard = ({title, items, onPress, onDelete}: ListCardProps) => {
  const totalItems = items?.length;
  const completedItems = items?.filter(item => item.isBought)?.length;

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onDelete}>
        <Icon
          as={TrashIcon}
          w="$5"
          h="$5"
          color={'$warmGray400'}
          fill={'$warmGray400'}
        />
      </TouchableOpacity>
      <View style={styles.titleAndProcessContainer}>
        <TouchableOpacity onPress={onPress} style={styles.cardTouchable}>
          <View>
            <Text style={styles.listName}>{title}</Text>
          </View>
          <ProgressCircle
            total={totalItems}
            completed={completedItems}
            radius={horizontalScale(25)}
            strokeWidth={horizontalScale(4)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
