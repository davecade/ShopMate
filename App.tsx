import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './App.styles';
import {AppNavigator} from './navigation/AppNavigator';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {RecoilRoot} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <GluestackUIProvider config={config}>
        <SafeAreaView style={styles.container}>
          <AppNavigator />
        </SafeAreaView>
      </GluestackUIProvider>
    </RecoilRoot>
  );
}

export default App;
