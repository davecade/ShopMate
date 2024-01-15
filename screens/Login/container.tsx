import React from 'react';
import LoginView from './view';
import {useItems} from '../../hooks/useItems';
import {useShoppingLists} from '../../hooks/useShoppingLists';

type LoginContainerProps = {
  navigateToDashboard: () => void;
};

export const LoginContainer = ({navigateToDashboard}: LoginContainerProps) => {
  const loginImage = require('../../assets/images/home.png');
  const {isLoading: isItemsLoading, getAllItems} = useItems();
  const {isLoading: isShoppingListsloading, getAllLists} = useShoppingLists();
  const isLoading = isItemsLoading || isShoppingListsloading;

  const handleLogin = async () => {
    await getAllItems();
    await getAllLists();
    navigateToDashboard();
  };

  return (
    <LoginView
      isLoading={isLoading}
      image={loginImage}
      handleLogin={handleLogin}
    />
  );
};
