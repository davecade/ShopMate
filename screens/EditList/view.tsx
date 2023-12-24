import {View, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {Button} from '../../components/Button/Button';
import {Heading, Text, VStack} from '@gluestack-ui/themed';

type EditListViewProps = {
  currentListName: string;
  onPressCancel: () => void;
  onPressSave: (title: string) => void;
};

export const EditListView = ({
  currentListName,
  onPressCancel,
  onPressSave,
}: EditListViewProps) => {
  const [listNameValue, setListNameValue] = useState(currentListName);
  const [showInputError, setShowInputError] = useState(false);

  useEffect(() => {
    setListNameValue(currentListName);
  }, [currentListName]);

  return (
    <View style={styles.container}>
      <VStack space="3xl">
        <Heading style={styles.label}>Edit list</Heading>
        <View>
          <TextInput
            style={[styles.input, showInputError && styles.inputError]}
            placeholder="Change Shopping List name"
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
            text="Save"
            onPress={() => {
              if (!listNameValue) {
                setShowInputError(true);
              } else {
                onPressSave(listNameValue);
              }
            }}
          />
        </View>
      </VStack>
    </View>
  );
};
