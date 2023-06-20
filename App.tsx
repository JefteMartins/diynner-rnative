import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './src/screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImagesHome from './src/components/imagesHome';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ImagesHome" component={ImagesHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

