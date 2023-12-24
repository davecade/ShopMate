import React from 'react';
import {EditListContainer} from './container';
import {useNavigation} from '@react-navigation/native';

type RouteParams = {
  route: {
    params: {
      listId: string;
    };
  };
};

export const EditListScene = ({route}: RouteParams) => {
  const {listId} = route.params;
  const {goBack} = useNavigation();

  const navigateToPreviousPage = () => {
    goBack();
  };

  return (
    <EditListContainer
      preselectedListId={listId}
      navigateToPreviousPage={navigateToPreviousPage}
    />
  );
};
