import React from 'react';
import {LoginContainer} from './container';
import {useNavigation} from '@react-navigation/native';

export const LoginScene = () => {
  const {navigate} = useNavigation();

  const navigateToDashboard = () => {
    //@ts-ignore
    navigate('Dashboard');
  };

  return <LoginContainer navigateToDashboard={navigateToDashboard} />;
};
