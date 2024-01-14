import {Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';

type ButtonProps = {
  text: string;
  onPress: () => void;
  type?: 'primary' | 'secondary' | 'grey';
  style?: {};
  disabled?: boolean;
};

export const Button = ({
  text,
  onPress,
  type = 'primary',
  style = {},
  disabled = false,
}: ButtonProps) => {
  const [buttonStyles, setButtonStyles] = useState<{}>(styles.primaryButton);
  const [buttonTextStyles, setButtonTextStyles] = useState<{}>(
    styles.primaryButtonText,
  );

  useEffect(() => {
    const setStyles = () => {
      switch (type) {
        case 'primary':
          setButtonStyles(styles.primaryButton);
          setButtonTextStyles(styles.primaryButtonText);
          break;
        case 'secondary':
          setButtonStyles(styles.secondaryButton);
          setButtonTextStyles(styles.secondaryButtonText);
          break;
        case 'grey':
          setButtonStyles(styles.greyButton);
          setButtonTextStyles(styles.greyButtonText);
          break;
        default:
          setButtonStyles(styles.primaryButton);
          setButtonTextStyles(styles.primaryButtonText);
          break;
      }
    };
    setStyles();
  }, [type]);

  return (
    <TouchableOpacity
      style={[buttonStyles, style]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={buttonTextStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
