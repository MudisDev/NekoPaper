import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { Favorites } from '../screens/Favorites';
import { Search } from '../screens/Search';
import { Settings } from '../screens/Settings';

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
    initialRouteName='Home'>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}} />
      <Tab.Screen name="Settings" component={Settings} options={{headerShown: false}} />
      <Tab.Screen name="Favorites" component={Favorites} options={{headerShown: false}} />
      <Tab.Screen name="Search" component={Search} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}