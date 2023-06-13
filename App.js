import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './src/Screens/MenuScreen';
import OrderConfirmationScreen from './src/Screens/OrderConfirmationScreen';
import Login from './src/Screens/Login';
import PaymentScreen from './src/Screens/PaymentScreen';
import Register from './src/Screens/Register.jsx';
import FeedbackScreen from './src/Screens/FeedbackScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Order Confirmation" component={OrderConfirmationScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
