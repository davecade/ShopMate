import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './styles';

type LoadingOverlayProps = {
  isVisible: boolean;
};

const LoadingOverlay = ({isVisible}: LoadingOverlayProps) => {
  if (!isVisible) {
    return null;
  }
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default LoadingOverlay;
