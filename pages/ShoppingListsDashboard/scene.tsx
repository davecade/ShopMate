import React from 'react';
import {ShoppingListContainer} from './container';
import {useNavigation} from '@react-navigation/native';

export const ShoppingListScene = () => {
  const {navigate} = useNavigation();

  const navigateToShoppingListAddEdit = () => {
    //@ts-ignore
    navigate('ShoppingListAddEdit');
  };
  return (
    <ShoppingListContainer
      navigateToShoppingListAddEdit={navigateToShoppingListAddEdit}
    />
  );
};
