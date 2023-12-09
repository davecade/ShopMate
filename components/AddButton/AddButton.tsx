import {AddIcon, Icon, View} from '@gluestack-ui/themed';
import React from 'react';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native';

type AddButtonProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onPress: () => void;
};

const AddButton = ({size, onPress}: AddButtonProps) => {
  const getSize = () => {
    switch (size) {
      case 'xs':
        return 4;
      case 'sm':
        return 6;
      case 'md':
        return 8;
      case 'lg':
        return 10;
      case 'xl':
        return 12;
      default:
        return 8;
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon
          as={AddIcon}
          w={`$${getSize()}`}
          h={`$${getSize()}`}
          color="white"
        />
      </View>
    </TouchableOpacity>
  );
};

export default AddButton;
