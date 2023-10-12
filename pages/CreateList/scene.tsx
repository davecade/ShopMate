import React from 'react';
import {CreateListContainer} from './container';
import {useNavigation} from '@react-navigation/native';

export const CreateListScene = () => {
  const {goBack} = useNavigation();

  const navigateToPreviousPage = () => {
    goBack();
  };

  return (
    <CreateListContainer navigateToPreviousPage={navigateToPreviousPage} />
  );
};
