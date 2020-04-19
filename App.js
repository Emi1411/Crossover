import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import Productos from './screen/Productos';

const Stack = createStackNavigator();

const App: () => React$Node = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Productos' component={Productos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
