import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

type LoginViewProps = {
  image: number;
};

const LoginView = ({image}: LoginViewProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop Mate</Text>
      <Image source={image} style={styles.image} />
      <Text style={styles.subTitle}>Shopping Lists</Text>
      <Text style={styles.description}>...made easy and convenient</Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Start using Shopper</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginView;
