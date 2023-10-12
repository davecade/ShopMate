import React from 'react';
import {CreateListView} from './view';

type CreateListContainerProps = {
  navigateToPreviousPage: () => void;
};

export const CreateListContainer = ({
  navigateToPreviousPage,
}: CreateListContainerProps) => {
  const onPressCreate = () => {
    console.log('Created List');
  };
  const onPressCancel = () => {
    navigateToPreviousPage();
  };

  return (
    <CreateListView
      onPressCancel={onPressCancel}
      onPressCreate={onPressCreate}
    />
  );
};
