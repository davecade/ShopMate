import React, {useEffect} from 'react';
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

  useEffect(() => {
    getAllItems();
    getAllLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LoginView
      isLoading={isLoading}
      image={loginImage}
      navigateToDashboard={navigateToDashboard}
    />
  );
};
