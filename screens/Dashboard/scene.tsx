import React from 'react';
import {DashboardContainer} from './container';
import {useNavigation} from '@react-navigation/native';

export const DashboardScene = () => {
  const {navigate} = useNavigation();

  const navigateToCreateList = () => {
    //@ts-ignore
    navigate('CreateList');
  };

  const navigateToItemList = (listId: number) => {
    //@ts-ignore
    navigate('ItemList', {listId});
  };

  return (
    <DashboardContainer
      navigateToCreateList={navigateToCreateList}
      navigateToItemList={navigateToItemList}
    />
  );
};
