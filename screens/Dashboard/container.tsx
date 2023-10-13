import React from 'react';
import {DashboardView} from './view';
import {useRecoilValue} from 'recoil';
import {shoppingListsAtom} from '../../state/atoms';

type DashboardContainerProps = {
  navigateToCreateList: () => void;
};

export const DashboardContainer = ({
  navigateToCreateList,
}: DashboardContainerProps) => {
  const shoppingLists = useRecoilValue(shoppingListsAtom);
  const trolleyImage = require('../../assets/images/trolley.png');

  const onCreateList = () => {
    navigateToCreateList();
  };

  return (
    <DashboardView
      onCreateList={onCreateList}
      image={trolleyImage}
      shoppingLists={shoppingLists}
    />
  );
};
