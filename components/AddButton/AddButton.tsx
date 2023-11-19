import {AddIcon, Icon, View} from '@gluestack-ui/themed';
import React from 'react';

const AddButton = () => {
  return (
    <View style={{backgroundColor: '#265751', borderRadius: 50, padding: 5}}>
      <Icon as={AddIcon} w="$8" h="$8" color="white" />
    </View>
  );
};

export default AddButton;
