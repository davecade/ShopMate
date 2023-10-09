import React from 'react';
import LoginView from './view';

export const LoginContainer = () => {
  const loginImage = require('../../assets/images/home.png');
  return <LoginView image={loginImage} />;
};
