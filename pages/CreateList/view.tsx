import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Button} from '../../components/Button/Button';

type CreateListViewProps = {
  onPressCancel: () => void;
  onPressCreate: () => void;
};

export const CreateListView = ({
  onPressCancel,
  onPressCreate,
}: CreateListViewProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name your list</Text>
      <TextInput style={styles.input} placeholder="Weekly Household Shopping" />
      <View style={styles.buttonContainer}>
        <Button text="Cancel" type="grey" onPress={onPressCancel} />
        <Button text="Continue" onPress={onPressCreate} />
      </View>
    </View>
  );
};
