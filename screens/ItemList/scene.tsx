import React, {useEffect, useState} from 'react';
import {ItemListContainer} from './container';
import {useNavigation} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/elements';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {hasCurrentListChangedAtom, selectedListIdAtom} from '../../state/atoms';

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
  const [isDirty, setIsDirty] = useRecoilState(hasCurrentListChangedAtom);
  const [showDiscardDialog, setShowDiscardDialog] = useState(false);

  useEffect(() => {
    const headerLeft = () => (
      <HeaderBackButton
        onPress={() => {
          if (isDirty) {
            setShowDiscardDialog(true);
            return;
          }
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
  }, [goBack, setOptions, setSelectedListId, isDirty]);

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
      isDirty={isDirty}
      setIsDirty={setIsDirty}
      showDiscardDialog={showDiscardDialog}
      setShowDiscardDialog={setShowDiscardDialog}
    />
  );
};
