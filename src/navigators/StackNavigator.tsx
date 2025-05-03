import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogIn } from '../screens/LogIn';
import { Register } from '../screens/Register';
import { BottomTabNavigator } from './BottonTabNavigator';
import { HeaderTitle } from '@react-navigation/elements';
import { Wallpaper } from '../screens/Wallpaper';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
    initialRouteName='LogIn'>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{headerShown: false}} />
      <Stack.Screen name="LogIn" component={LogIn} options={{headerShown : false}} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Wallpaper" component={Wallpaper} options={{headerShown: false}} />

    </Stack.Navigator>
  );
}