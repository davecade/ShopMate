import {HeaderBackButton} from '@react-navigation/elements';
import {NavigationProp} from '@react-navigation/native';
import React from 'react';

export const CustomBackButton = ({
  navigation,
}: {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
}) => (
  <HeaderBackButton
    onPress={() => {
      // Perform your state reset logic here
      navigation.goBack();
    }}
  />
);
