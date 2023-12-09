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
import {Alert} from '../../components/Alert/Alert';
import AddButton from '../../components/AddButton/AddButton';
import {horizontalScale, verticalScale} from '../../styles/scaling';

type ItemListViewProps = {
  listName: string;
  totalItems: number;
  totalCost: number;
  totalCompletedItems: number;
  listItems: ShoppingItem[];
  isLoading: boolean;
  image: number;
  showDiscardDialog: boolean;
  isDirty: boolean;
  setShowDiscardDialog: (show: boolean) => void;
  onPressItem: (id: string | undefined) => void;
  onPressIncrement: (id: string | undefined) => void;
  onPressDecrement: (id: string | undefined) => void;
  onDeleteItem: (id: string | undefined) => void;
  saveChanges: () => void;
  discardChanges: () => void;
  navigateToCreateItem: () => void;
  navigateToPreviousPage: () => void;
};

export const ItemListView = ({
  listName,
  totalItems,
  totalCost,
  totalCompletedItems,
  listItems,
  isLoading,
  image,
  showDiscardDialog,
  isDirty,
  setShowDiscardDialog,
  onPressItem,
  onPressIncrement,
  onPressDecrement,
  onDeleteItem,
  saveChanges,
  discardChanges,
  navigateToCreateItem,
  navigateToPreviousPage,
}: ItemListViewProps) => {
  const hasItems = listItems?.length > 0;
  const isEmpty = !hasItems;
  return (
    <View style={globalStyles.container}>
      <VStack space="sm">
        <VStack space="lg" style={styles.titleProgressContainer}>
          <Heading style={styles.label}>{listName}</Heading>
          <View style={styles.flexDirectionRow}>
            <View style={styles.progressAndAddContainer}>
              <ProgressCircle
                total={totalItems}
                completed={totalCompletedItems}
                radius={horizontalScale(25)}
                strokeWidth={verticalScale(2.5)}
              />
              {hasItems && (
                <View style={styles.addButtonContainer}>
                  <View style={styles.buttonContainerRowEnd}>
                    <AddButton onPress={navigateToCreateItem} />
                  </View>
                </View>
              )}
            </View>
          </View>
        </VStack>
        {isLoading ? (
          <View style={[globalStyles.flex, styles.emptyTextContainer]}>
            <Text style={styles.emptyText}>Loading...</Text>
          </View>
        ) : isEmpty && !isDirty ? (
          <View style={[globalStyles.flex]}>
            <VStack gap="$10">
              <View style={styles.imageContainer}>
                <ImageWithGlow image={image} size="lg" />
              </View>
              <View>
                <Text style={styles.emptyText}>Your list is empty</Text>
                <Text style={styles.emptyText}>
                  Click the button below to add an item now
                </Text>
              </View>
              <View style={styles.buttonContainerRowCenter}>
                <AddButton size="xl" onPress={navigateToCreateItem} />
              </View>
            </VStack>
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
                      onIncrement={() => onPressIncrement(item._id)}
                      onDecrement={() => onPressDecrement(item._id)}
                      onDelete={() => onDeleteItem(item._id)}
                    />
                  );
                })}
              </VStack>
            </ScrollView>
            <View>
              <Text
                style={styles.totalCost}>{`Total Cost: $${totalCost}`}</Text>
            </View>
            <View style={styles.buttonContainerRowCenter}>
              <Button text={'Save'} onPress={saveChanges} />
            </View>
          </>
        )}
      </VStack>
      <Alert
        title="DISCARD"
        message="Would you like to discard your changes?"
        buttonActionTitle="Discard"
        showDialog={showDiscardDialog}
        onClose={() => setShowDiscardDialog(false)}
        onAction={() => {
          setShowDiscardDialog(false);
          navigateToPreviousPage();
          setTimeout(() => {
            discardChanges();
          }, 500); // so that it doesn't change too fast
        }}
      />
    </View>
  );
};
