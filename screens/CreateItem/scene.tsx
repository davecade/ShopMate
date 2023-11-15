import React from 'react';
import {CreateItemContainer} from './container';
import {useNavigation} from '@react-navigation/native';

export const CreateItemScene = () => {
  const {goBack} = useNavigation();

  const navigateToPreviousPage = () => {
    goBack();
  };

  return (
    <CreateItemContainer navigateToPreviousPage={navigateToPreviousPage} />
  );
};
