import React from 'react';
import {LoginContainer} from './container';
import {useNavigation} from '@react-navigation/native';

export const LoginScene = () => {
  const {navigate} = useNavigation();

  const navigateToShoppingListDashboard = () => {
    //@ts-ignore
    navigate('ShoppingListsDashboard');
  };

  return (
    <LoginContainer
      navigateToShoppingListDashboard={navigateToShoppingListDashboard}
    />
  );
};
