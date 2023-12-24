import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import CreateList from '../screens/CreateList';
import EditList from '../screens/EditList';
import ItemList from '../screens/ItemList';
import CreateItem from '../screens/CreateItem';

type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
  CreateList: undefined;
  EditList: {
    listId: string;
  };
  ItemList: {
    listId: string;
  };
  CreateItem: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateList"
          component={CreateList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditList"
          component={EditList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ItemList"
          component={ItemList}
          options={{
            headerShown: true,
            headerTitle: '',
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
        <Stack.Screen
          name="CreateItem"
          component={CreateItem}
          options={{
            headerShown: true,
            headerTitle: '',
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
