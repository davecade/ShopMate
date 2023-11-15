import React, {useEffect} from 'react';
import {ItemListContainer} from './container';
import {useNavigation} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/elements';
import {useSetRecoilState} from 'recoil';
import {selectedListIdAtom} from '../../state/atoms';

type RouteParams = {
  route: {
    params: {
      listId: string;
    };
  };
};

export const ItemListScene = ({route}: RouteParams) => {
  const {listId} = route.params;
  const {navigate, goBack, setOptions} = useNavigation();
  const setSelectedListId = useSetRecoilState<string>(selectedListIdAtom);

  useEffect(() => {
    const headerLeft = () => (
      <HeaderBackButton
        onPress={() => {
          goBack();
          setSelectedListId('');
        }}
      />
    );

    // This setOptions only applies to this component
    setOptions({
      headerShown: true,
      headerLeft,
    });
  }, [goBack, setOptions, setSelectedListId]);

  const navigateToCreateItem = () => {
    //@ts-ignore
    navigate('CreateItem');
  };

  const navigateToPreviousPage = () => {
    goBack();
    setSelectedListId('');
  };

  return (
    <ItemListContainer
      preselectedListId={listId}
      navigateToCreateItem={navigateToCreateItem}
      navigateToPreviousPage={navigateToPreviousPage}
    />
  );
};
