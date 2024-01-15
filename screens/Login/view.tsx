import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {Button} from '../../components/Button/Button';
import {ImageWithGlow} from '../../components/ImageWithGlow/ImageWithGlow';
import {Heading} from '@gluestack-ui/themed';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';

type LoginViewProps = {
  isLoading: boolean;
  image: number;
  handleLogin: () => void;
};

const LoginView = ({isLoading, image, handleLogin}: LoginViewProps) => {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Shop Mate</Heading>
      <ImageWithGlow image={image} />
      <Text style={styles.subTitle}>Shopping Lists</Text>
      <Text style={styles.description}>...made easy and convenient</Text>
      <Button
        type="secondary"
        text={'Start using Shop Mate'}
        onPress={handleLogin}
      />
      <LoadingOverlay isVisible={isLoading} />
    </View>
  );
};

export default LoginView;
