import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Button from '../../../components/Button/Button';

export const ShoppingListsAddEditView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.buttonContainer}>Name your list</Text>
      <TextInput style={styles.input} placeholder="Weekly Household Shopping" />
      <View style={styles.buttonContainer}>
        <Button text="Cancel" onPress={() => console.log('Cancel Pressed')} />
        <Button
          text="Continue"
          onPress={() => console.log('Continue Pressed')}
        />
      </View>
    </View>
  );
};
