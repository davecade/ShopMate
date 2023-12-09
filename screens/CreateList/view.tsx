import {View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Button} from '../../components/Button/Button';
import {Heading, VStack} from '@gluestack-ui/themed';

type CreateListViewProps = {
  onPressCancel: () => void;
  onPressCreate: (title: string) => void;
};

export const CreateListView = ({
  onPressCancel,
  onPressCreate,
}: CreateListViewProps) => {
  const [listNameValue, setListNameValue] = useState('');

  return (
    <View style={styles.container}>
      <VStack space="3xl">
        <Heading style={styles.label}>Name your list</Heading>
        <TextInput
          style={styles.input}
          placeholder="Enter Shopping List name"
          placeholderTextColor={'grey'}
          onChangeText={value => setListNameValue(value)}
          value={listNameValue}
        />
        <View style={styles.buttonContainer}>
          <Button text="Cancel" type="grey" onPress={onPressCancel} />
          <Button
            text="Continue"
            onPress={() => onPressCreate(listNameValue)}
          />
        </View>
      </VStack>
    </View>
  );
};
