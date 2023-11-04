import React, {Suspense} from 'react';
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
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContainer
        navigateToCreateList={navigateToCreateList}
        navigateToItemList={navigateToItemList}
      />
    </Suspense>
  );
};
