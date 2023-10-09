import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import Button from '../../components/Button/Button';

type LoginViewProps = {
  image: number;
  navigateToShoppingList: () => void;
};

const LoginView = ({image, navigateToShoppingList}: LoginViewProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop Mate</Text>
      <Image source={image} style={styles.image} />
      <Text style={styles.subTitle}>Shopping Lists</Text>
      <Text style={styles.description}>...made easy and convenient</Text>
      <Button
        type="secondary"
        text={'Start using Shopper'}
        onPress={navigateToShoppingList}
      />
    </View>
  );
};

export default LoginView;
