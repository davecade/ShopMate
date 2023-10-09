import React from 'react';
import LoginView from './view';
import {useNavigation} from '@react-navigation/native';

export const LoginContainer = () => {
  const loginImage = require('../../assets/images/home.png');
  const {navigate} = useNavigation();

  const navigateToShoppingList = () => {
    //@ts-ignore
    navigate('ShoppingList');
  };

  return (
    <LoginView
      image={loginImage}
      navigateToShoppingList={navigateToShoppingList}
    />
  );
};
