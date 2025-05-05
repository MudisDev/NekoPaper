import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { LogIn } from './src/screens/LogIn';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigators/StackNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { UserProvider } from './src/context/UserContext';
import { ThemeProvider } from './src/context/ThemeContext';


export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </GestureHandlerRootView>
      </UserProvider>
    </ThemeProvider>
  );
}

