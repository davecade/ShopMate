import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {Button} from '../../components/Button/Button';
import {ImageWithGlow} from '../../components/ImageWithGlow/ImageWithGlow';
import {Heading, VStack, ScrollView} from '@gluestack-ui/themed';
import {ListCard} from '../../components/ListCard/ListCard';
import {ShoppingList} from '../../types';
import {Alert} from '../../components/Alert/Alert';

type DashboardViewProps = {
  onCreateList: () => void;
  onPressList: (listId: string | undefined) => void;
  onDeleteList: (listId: string | undefined) => void;
  setShowDeleteDialog: (show: boolean) => void;
  onCloseDeleteDialog: () => void;
  setSelectedListIdToDelete: (id: string | undefined) => void;
  showDeleteDialog: boolean;
  selectedListIdToDelete: string | undefined;
  image: number;
  shoppingLists: ShoppingList[];
};

export const DashboardView = ({
  onCreateList,
  onPressList,
  onDeleteList,
  setShowDeleteDialog,
  onCloseDeleteDialog,
  setSelectedListIdToDelete,

  showDeleteDialog,
  selectedListIdToDelete,
  image,
  shoppingLists,
}: DashboardViewProps) => {
  const hasShoppingLists = shoppingLists?.length > 0;
  const isEmpty = !hasShoppingLists;

  return (
    <View style={styles.container}>
      {isEmpty && (
        <>
          <Heading style={styles.shoppingTitle}>Empty List</Heading>
          <View>
            <View style={styles.imageContainer}>
              <ImageWithGlow image={image} />
            </View>
            <Text style={styles.emptyText}>
              You have not added any shopping lists
            </Text>
            <Text style={styles.emptyText}>
              Tap the button below to create one now
            </Text>
            <View style={styles.buttonContainer}>
              <Button
                text={'+ Create'}
                onPress={() => onCreateList()}
                type="primary"
              />
            </View>
          </View>
        </>
      )}
      {hasShoppingLists && (
        <>
          <Heading style={styles.shoppingTitle}>Your shopping Lists</Heading>
          <ScrollView>
            <VStack space="2xl">
              {shoppingLists.map((list, index) => {
                return (
                  <ListCard
                    key={index}
                    title={list.name}
                    items={list.items}
                    onPress={() => onPressList(list._id)}
                    onDelete={() => {
                      setSelectedListIdToDelete(list._id);
                      setShowDeleteDialog(true);
                    }}
                  />
                );
              })}
            </VStack>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <Button
              text={'+ Create'}
              onPress={() => onCreateList()}
              type="primary"
            />
          </View>
        </>
      )}
      <Alert
        showDialog={showDeleteDialog}
        title={'DELETE'}
        message={'Are you sure you want to delete this List?'}
        buttonActionTitle={'Delete'}
        onAction={() => onDeleteList(selectedListIdToDelete)}
        onClose={onCloseDeleteDialog}
      />
    </View>
  );
};
