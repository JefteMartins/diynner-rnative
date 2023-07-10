import Home from './src/screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImagesHome from './src/components/imagesHome';
import RecipeDetails from './src/screens/home/recipeDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
      // screenOptions={{headerShown: false}} 
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ImagesHome" component={RecipeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

