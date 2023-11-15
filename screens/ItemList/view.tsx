import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Heading, ScrollView, VStack} from '@gluestack-ui/themed';
import {ItemCard} from '../../components/ItemCard/ItemCard';
import {ShoppingItem} from '../../types';
import {ProgressCircle} from '../../components/ProgressCircle/ProgressCircle';
import {globalStyles} from './../../styles/globalStyles';
import {Button} from '../../components/Button/Button';
import {ImageWithGlow} from '../../components/ImageWithGlow/ImageWithGlow';

type ItemListViewProps = {
  listName: string;
  totalItems: number;
  totalCompletedItems: number;
  listItems: ShoppingItem[];
  isLoading: boolean;
  image: number;
  onPressItem: (id: string | undefined) => void;
  onDone: () => void;
  navigateToCreateItem: () => void;
};

export const ItemListView = ({
  listName,
  totalItems,
  totalCompletedItems,
  listItems,
  isLoading,
  image,
  onPressItem,
  onDone,
  navigateToCreateItem,
}: ItemListViewProps) => {
  const hasItems = listItems?.length > 0;
  const isEmpty = !hasItems;

  return (
    <View style={globalStyles.container}>
      <VStack space="sm">
        <VStack space="lg" style={styles.titleProgressContainer}>
          <Heading style={styles.label}>{listName}</Heading>
          <ProgressCircle
            total={totalItems}
            completed={totalCompletedItems}
            radius={25}
            strokeWidth={5}
          />
        </VStack>
        {isLoading ? (
          <View style={[globalStyles.flex, styles.emptyTextContainer]}>
            <Text style={styles.emptyText}>Loading...</Text>
          </View>
        ) : isEmpty ? (
          <View style={[globalStyles.flex, styles.emptyTextContainer]}>
            <View style={styles.imageContainer}>
              <ImageWithGlow image={image} size="lg" />
            </View>
            <Text style={styles.emptyText}>Your list is empty</Text>
            <Text style={styles.emptyText}>
              Click the button below to add an item now
            </Text>
            <View style={styles.buttonContainer}>
              <Button text={'Add'} onPress={navigateToCreateItem} />
            </View>
          </View>
        ) : (
          <>
            <ScrollView style={globalStyles.flex}>
              <VStack space="sm">
                {listItems?.map(item => {
                  return (
                    <ItemCard
                      key={item._id}
                      item={item}
                      onPress={() => onPressItem(item._id)}
                    />
                  );
                })}
              </VStack>
            </ScrollView>
            <View style={styles.buttonContainer}>
              <Button text={'Save'} onPress={onDone} />
              <Button text={'Add'} onPress={navigateToCreateItem} />
            </View>
          </>
        )}
      </VStack>
    </View>
  );
};
