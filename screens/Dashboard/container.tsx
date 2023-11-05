import React from 'react';
import {DashboardView} from './view';
import {useRecoilValue} from 'recoil';
import {allListsQuery} from '../../state/selectors';

type DashboardContainerProps = {
  navigateToCreateList: () => void;
  navigateToItemList: (listId: string) => void;
};

export const DashboardContainer = ({
  navigateToCreateList,
  navigateToItemList,
}: DashboardContainerProps) => {
  const shoppingLists = useRecoilValue(allListsQuery);
  const trolleyImage = require('../../assets/images/trolley.png');

  const onCreateList = () => {
    navigateToCreateList();
  };

  const onPressList = (listId: string) => {
    navigateToItemList(listId);
  };

  return (
    <DashboardView
      onCreateList={onCreateList}
      onPressList={onPressList}
      image={trolleyImage}
      shoppingLists={shoppingLists ? shoppingLists : []}
    />
  );
};
