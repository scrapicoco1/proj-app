import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginRegisterScreen from './LoginRegisterScreen';
import MenuScreen from './MenuScreen';
import PaymentScreen from '../Screens/PaymentScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginRegister">
        <Stack.Screen name="LoginRegister" component={LoginRegisterScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Image" component={ImageScreen} /> {/* Add the ImageScreen component */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
