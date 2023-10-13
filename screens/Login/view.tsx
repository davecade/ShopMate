import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {Button} from '../../components/Button/Button';
import {ImageWithGlow} from '../../components/ImageWithGlow/ImageWithGlow';
import {Heading} from '@gluestack-ui/themed';

type LoginViewProps = {
  image: number;
  navigateToDashboard: () => void;
};

const LoginView = ({image, navigateToDashboard}: LoginViewProps) => {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Shop Mate</Heading>
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
