import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {Button} from '../../components/Button/Button';
import {ImageWithGlow} from '../../components/ImageWithGlow/ImageWithGlow';
import {Heading, VStack, ScrollView} from '@gluestack-ui/themed';
import {ListCard} from '../../components/ListCard/ListCard';
import {ShoppingList} from '../../types';

type DashboardViewProps = {
  onCreateList: () => void;
  onPressList: (listId: string) => void;
  image: number;
  shoppingLists: ShoppingList[];
};

export const DashboardView = ({
  onCreateList,
  onPressList,
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
    </View>
  );
};
