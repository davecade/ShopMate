import {View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Button} from '../../components/Button/Button';
import {Heading, Text, VStack} from '@gluestack-ui/themed';

type CreateListViewProps = {
  onPressCancel: () => void;
  onPressCreate: (title: string) => void;
};

export const CreateListView = ({
  onPressCancel,
  onPressCreate,
}: CreateListViewProps) => {
  const [listNameValue, setListNameValue] = useState('');
  const [showInputError, setShowInputError] = useState(false);

  return (
    <View style={styles.container}>
      <VStack space="3xl">
        <Heading style={styles.label}>Name your list</Heading>
        <View>
          <TextInput
            style={[styles.input, showInputError && styles.inputError]}
            placeholder="Enter Shopping List name"
            placeholderTextColor={'grey'}
            onChangeText={value => {
              setShowInputError(false);
              setListNameValue(value);
            }}
            value={listNameValue}
          />
          {showInputError && (
            <Text style={styles.inputErrorText}>
              Please enter a name for your list
            </Text>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="Cancel"
            type="grey"
            onPress={() => {
              onPressCancel();
              setShowInputError(false);
            }}
          />
          <Button
            text="Create"
            onPress={() => {
              if (!listNameValue) {
                setShowInputError(true);
              } else {
                onPressCreate(listNameValue);
              }
            }}
          />
        </View>
      </VStack>
    </View>
  );
};
