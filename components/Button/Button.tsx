import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Button.styles';

type ButtonProps = {
  text: string;
  onPress: () => void;
  type?: 'primary' | 'secondary';
};

const Button = ({text, onPress, type = 'primary'}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={type === 'primary' ? styles.primaryButton : styles.loginButton}
      onPress={onPress}>
      <Text
        style={
          type === 'primary' ? styles.primaryButtonText : styles.loginButtonText
        }>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
