import React from 'react';
import {DashboardView} from './view';

type DashboardContainerProps = {
  navigateToCreateList: () => void;
};

export const DashboardContainer = ({
  navigateToCreateList,
}: DashboardContainerProps) => {
  const trolleyImage = require('../../assets/images/trolley.png');

  const onCreateList = () => {
    navigateToCreateList();
  };

  return <DashboardView onCreateList={onCreateList} image={trolleyImage} />;
};
