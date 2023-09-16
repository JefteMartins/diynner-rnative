import Home from './src/screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeDetails from './src/screens/home/recipeDetails';
import React, { useEffect, useState } from 'react';
import Login from './src/screens/home/login';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { NativeBaseProvider } from 'native-base';
import cart from './src/screens/home/cart';
import Historico from './src/screens/home/historico';

const Stack = createStackNavigator();
const insideStack = createStackNavigator();

function LoggedStack() {
  return (

    <insideStack.Navigator>
      <insideStack.Screen name="Home" component={Home} />
      <insideStack.Screen name="Detalhes da compra" component={RecipeDetails} />
      <insideStack.Screen name="Pagamento" component={cart} />
      <insideStack.Screen name="Histórico de compras" component={Historico} />
    </insideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user)
    })
  }, [])
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{
            headerShown: false
          }}
        >
          {user ?
            <Stack.Screen name="Home" component={LoggedStack} />
            :
            <Stack.Screen name="Login" component={Login} />
          }
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

