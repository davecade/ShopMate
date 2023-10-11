import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import Button from '../../components/Button/Button';

type ShoppingListViewProps = {
  onCreateList: () => void;
  image: number;
};

export const ShoppingListView = ({
  onCreateList,
  image,
}: ShoppingListViewProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.shoppingTitle}>Your shopping Lists</Text>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.cartImage} />
      </View>
      <Text style={styles.emptyText}>
        You have not added any shopping lists
      </Text>
      <Text style={styles.emptyText}>
        Tap the button below to create one now
      </Text>
      <View style={styles.buttonContainer}>
        <Button text={'+ Create'} onPress={onCreateList} type="primary" />
      </View>
    </View>
  );
};
