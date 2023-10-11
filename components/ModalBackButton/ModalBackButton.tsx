import {Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const ModalBackButton = ({
  navigation,
}: {
  navigation: {
    goBack: () => void;
  };
}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text>{'<--'}</Text>
    </TouchableOpacity>
  );
};
