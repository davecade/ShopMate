import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ShoppingItem} from '../../types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ProgressCircle} from '../ProgressCircle/ProgressCircle';
import {notStartedColor} from '../../styles/globalStyles';
import {Icon, TrashIcon} from '@gluestack-ui/themed';

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
    <View style={[styles.card, {borderColor: notStartedColor}]}>
      <View style={styles.titleAndProcessContainer}>
        <TouchableOpacity onPress={onPress} style={styles.cardTouchable}>
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
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Icon
          as={TrashIcon}
          w="$6"
          h="$6"
          color={'$warmGray400'}
          fill={'$warmGray400'}
        />
      </TouchableOpacity>
    </View>
  );
};
