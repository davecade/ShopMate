import React from 'react';
import LoginView from './view';

type LoginContainerProps = {
  navigateToDashboard: () => void;
};

export const LoginContainer = ({navigateToDashboard}: LoginContainerProps) => {
  const loginImage = require('../../assets/images/home.png');

  return (
    <LoginView image={loginImage} navigateToDashboard={navigateToDashboard} />
  );
};
