import React from 'react';
import LoginView from './view';

type LoginContainerProps = {
  navigateToShoppingListDashboard: () => void;
};

export const LoginContainer = ({
  navigateToShoppingListDashboard,
}: LoginContainerProps) => {
  const loginImage = require('../../assets/images/home.png');

  return (
    <LoginView
      image={loginImage}
      navigateToShoppingListDashboard={navigateToShoppingListDashboard}
    />
  );
};
