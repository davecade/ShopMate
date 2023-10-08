import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './Home.styles';

const HomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop Mate</Text>
      <Image
        source={require('../../assets/images/home.png')}
        style={styles.image}
      />
      <Text style={styles.subTitle}>Shopping Lists</Text>
      <Text style={styles.description}>...made easy and convenient</Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Start using Shopper</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;
