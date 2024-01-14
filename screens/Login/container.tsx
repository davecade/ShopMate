import React, {useEffect} from 'react';
import LoginView from './view';
import {useSetRecoilState} from 'recoil';
import {ShoppingItem} from '../../types';
import {getAllItemsAsync} from '../../services/api';
import {allItemsAtom} from '../../state/atoms';

type LoginContainerProps = {
  navigateToDashboard: () => void;
};

export const LoginContainer = ({navigateToDashboard}: LoginContainerProps) => {
  const loginImage = require('../../assets/images/home.png');
  const setAllShoppingItems = useSetRecoilState<ShoppingItem[]>(allItemsAtom);

  useEffect(() => {
    (async () => {
      const items = await getAllItemsAsync();
      setAllShoppingItems(items);
    })();
  }, [setAllShoppingItems]);

  return (
    <LoginView image={loginImage} navigateToDashboard={navigateToDashboard} />
  );
};
