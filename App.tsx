import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './App.styles';
import {AppNavigator} from './navigation/AppNavigator';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
}

export default App;
