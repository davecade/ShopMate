import React, {useEffect} from 'react';
import {CreateItemContainer} from './container';
import {useNavigation} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/elements';

export const CreateItemScene = () => {
  const {goBack, setOptions} = useNavigation();

  const navigateToPreviousPage = () => {
    goBack();
  };

  useEffect(() => {
    const headerLeft = () => <HeaderBackButton onPress={goBack} />;

    setOptions({
      headerShown: true,
      headerLeft,
    });
  }, [goBack, setOptions]);

  return (
    <CreateItemContainer navigateToPreviousPage={navigateToPreviousPage} />
  );
};
