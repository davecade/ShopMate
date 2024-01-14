import {View, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Button} from '../../components/Button/Button';
import {Heading, Text, VStack} from '@gluestack-ui/themed';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';

type EditListViewProps = {
  isLoading: boolean;
  listNameValue: string;
  showInputError: boolean;
  setListNameValue: (value: string) => void;
  setShowInputError: (show: boolean) => void;
  onPressCancel: () => void;
  onPressSave: (title: string) => void;
};

export const EditListView = ({
  isLoading,
  listNameValue,
  showInputError,
  setListNameValue,
  setShowInputError,
  onPressCancel,
  onPressSave,
}: EditListViewProps) => {
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
      <LoadingOverlay isVisible={isLoading} />
    </View>
  );
};
