import React from 'react';
import {ShoppingListView} from './view';

export const ShoppingListContainer = () => {
  const trolleyImage = require('../../assets/images/trolley.png');

  const onCreateList = () => {
    console.log('Create List');
  };

  return <ShoppingListView onCreateList={onCreateList} image={trolleyImage} />;
};
