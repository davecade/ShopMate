import React from 'react';
import {ItemListContainer} from './container';
import {useNavigation} from '@react-navigation/native';

export const ItemListScene = () => {
  const {goBack} = useNavigation();

  const navigateToPreviousPage = () => {
    goBack();
  };

  return <ItemListContainer navigateToPreviousPage={navigateToPreviousPage} />;
};
