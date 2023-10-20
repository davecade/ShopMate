import React from 'react';
import {DashboardView} from './view';
import {useRecoilValue} from 'recoil';
import {shoppingListsAtom} from '../../state/atoms';

type DashboardContainerProps = {
  navigateToCreateList: () => void;
  navigateToItemList: (listId: number) => void;
};

export const DashboardContainer = ({
  navigateToCreateList,
  navigateToItemList,
}: DashboardContainerProps) => {
  const shoppingLists = useRecoilValue(shoppingListsAtom);
  const trolleyImage = require('../../assets/images/trolley.png');

  const onCreateList = () => {
    navigateToCreateList();
  };

  const onPressList = (listId: number) => {
    navigateToItemList(listId);
  };

  return (
    <DashboardView
      onCreateList={onCreateList}
      onPressList={onPressList}
      image={trolleyImage}
      shoppingLists={shoppingLists}
    />
  );
};
