import React from 'react';
import {SafeAreaView} from 'react-native';
import HomePage from './pages/Home/Home';
import styles from './App.styles';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <HomePage />
    </SafeAreaView>
  );
};

export default App;
