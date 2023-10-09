import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

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
      <TouchableOpacity style={styles.button} onPress={onCreateList}>
        <Text style={styles.buttonText}>+ Create</Text>
      </TouchableOpacity>
    </View>
  );
};
