import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogIn } from '../screens/LogIn';
import { Register } from '../screens/Register';
import { BottomTabNavigator } from './BottonTabNavigator';
import { HeaderTitle } from '@react-navigation/elements';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
    initialRouteName='LogIn'>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}