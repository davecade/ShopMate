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
import {TouchableOpacity} from 'react-native-gesture-handler';

type ItemListViewProps = {
  listName: string;
  totalItems: number;
  totalCost: number;
  totalCompletedItems: number;
  listItems: ShoppingItem[];
  isLoading: boolean;
  image: number;
  showDiscardDialog: boolean;
  setShowDiscardDialog: (show: boolean) => void;
  onPressItem: (id: string | undefined) => void;
  saveChanges: () => void;
  discardChanges: () => void;
  navigateToCreateItem: () => void;
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
  setShowDiscardDialog,
  onPressItem,
  saveChanges,
  discardChanges,
  navigateToCreateItem,
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
                radius={35}
                strokeWidth={5}
              />
              <View style={styles.addButtonContainer}>
                <TouchableOpacity
                  style={styles.buttonContainerRowEnd}
                  onPress={navigateToCreateItem}>
                  <AddButton />
                </TouchableOpacity>
              </View>
            </View>
          </View>
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
            <View style={styles.buttonContainerRowCenter}>
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
        onAction={discardChanges}
      />
    </View>
  );
};
