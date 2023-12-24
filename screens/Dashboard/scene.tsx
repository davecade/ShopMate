import React from 'react';
import {DashboardContainer} from './container';
import {useNavigation} from '@react-navigation/native';

export const DashboardScene = () => {
  const {navigate} = useNavigation();

  const navigateToCreateList = () => {
    //@ts-ignore
    navigate('CreateList');
  };

  const navigateToEditList = (listId: string) => {
    //@ts-ignore
    navigate('EditList', {listId});
  };

  const navigateToItemList = (listId: string) => {
    //@ts-ignore
    navigate('ItemList', {listId});
  };

  return (
    <DashboardContainer
      navigateToCreateList={navigateToCreateList}
      navigateToEditList={navigateToEditList}
      navigateToItemList={navigateToItemList}
    />
  );
};
