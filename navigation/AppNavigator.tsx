import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import ShoppingListsDashboard from '../pages/ShoppingListsDashboard';
import ShoppingListAddEdit from '../pages/ShoppingListsDashboard/AddEdit';
import {ModalBackButton} from '../components/ModalBackButton/ModalBackButton';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShoppingListsDashboard"
          component={ShoppingListsDashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShoppingListAddEdit"
          component={ShoppingListAddEdit}
          options={({navigation}) => ({
            headerShown: true,
            // eslint-disable-next-line react/no-unstable-nested-components
            headerLeft: () => <ModalBackButton navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
