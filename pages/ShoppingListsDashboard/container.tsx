import React from 'react';
import {ShoppingListView} from './view';

type ShoppingListContainerProps = {
  navigateToShoppingListAddEdit: () => void;
};

export const ShoppingListContainer = ({
  navigateToShoppingListAddEdit,
}: ShoppingListContainerProps) => {
  const trolleyImage = require('../../assets/images/trolley.png');

  const onCreateList = () => {
    navigateToShoppingListAddEdit();
  };

  return <ShoppingListView onCreateList={onCreateList} image={trolleyImage} />;
};
