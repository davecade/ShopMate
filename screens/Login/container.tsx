import React, {useEffect} from 'react';
import LoginView from './view';
import {useSetRecoilState} from 'recoil';
import {getAllItemsQuery} from '../../state/selectors';
import {ShoppingItem} from '../../types';
import {getAllItemsAsync} from '../../services/api';

type LoginContainerProps = {
  navigateToDashboard: () => void;
};

export const LoginContainer = ({navigateToDashboard}: LoginContainerProps) => {
  const loginImage = require('../../assets/images/home.png');
  const setAllShoppingItems =
    useSetRecoilState<ShoppingItem[]>(getAllItemsQuery);

  useEffect(() => {
    const getAllItems = async () => {
      const items = await getAllItemsAsync();
      setAllShoppingItems(items);
    };
    getAllItems();
  }, [setAllShoppingItems]);

  return (
    <LoginView image={loginImage} navigateToDashboard={navigateToDashboard} />
  );
};
