import React from 'react';
import {ItemListContainer} from './container';
import {useNavigation} from '@react-navigation/native';

type RouteParams = {
  route: {
    params: {
      listId: string;
    };
  };
};

export const ItemListScene = ({route}: RouteParams) => {
  const {listId} = route.params;
  const {navigate, goBack} = useNavigation();

  const navigateToCreateItem = () => {
    //@ts-ignore
    navigate('CreateItem');
  };

  const navigateToPreviousPage = () => {
    goBack();
  };

  return (
    <ItemListContainer
      preselectedListId={listId}
      navigateToCreateItem={navigateToCreateItem}
      navigateToPreviousPage={navigateToPreviousPage}
    />
  );
};
