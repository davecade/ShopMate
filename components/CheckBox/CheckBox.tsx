import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

type CheckboxProps = {
  isChecked: boolean;
};

export const CheckBox = ({isChecked}: CheckboxProps) => {
  return (
    <View style={isChecked ? styles.checkboxChecked : styles.checkboxUnchecked}>
      <Text>{isChecked ? <Text style={styles.checked}>✓</Text> : null}</Text>
    </View>
  );
};
