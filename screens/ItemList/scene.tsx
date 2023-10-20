import React from 'react';
import {ItemListContainer} from './container';

type RouteParams = {
  route: {
    params: {
      listId: number;
    };
  };
};

export const ItemListScene = ({route}: RouteParams) => {
  const {listId} = route.params;
  return <ItemListContainer selectedListId={listId} />;
};
