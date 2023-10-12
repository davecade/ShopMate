import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {Button} from '../../components/Button/Button';
import {ImageWithGlow} from '../../components/ImageWithGlow/ImageWithGlow';

type LoginViewProps = {
  image: number;
  navigateToDashboard: () => void;
};

const LoginView = ({image, navigateToDashboard}: LoginViewProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop Mate</Text>
      <ImageWithGlow image={image} />
      <Text style={styles.subTitle}>Shopping Lists</Text>
      <Text style={styles.description}>...made easy and convenient</Text>
      <Button
        type="secondary"
        text={'Start using Shopper'}
        onPress={navigateToDashboard}
      />
    </View>
  );
};

export default LoginView;
