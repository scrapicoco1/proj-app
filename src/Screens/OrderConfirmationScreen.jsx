import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PaymentScreen from './PaymentScreen';

const OrderConfirmationScreen = ({ route, navigation }) => {
  const { order } = route.params;

  const calculateTotal = () => {
    let total = 0;
    order.forEach(dish => {
      total += dish.price;
    });
    return total;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Confirmation Screen</Text>
      {order.map(dish => (
        <View key={dish.id} style={styles.dishContainer}>
          <Text style={styles.dishName}>{dish.name}</Text>
          <Text style={styles.dishDescription}>{dish.description}</Text>
          <Text style={styles.dishPrice}>{dish.price}</Text>
        </View>
      ))}
      <Text style={styles.total}>Total: {calculateTotal()}</Text>
      <Button
        title="Confirm Order"
        onPress={() => navigation.navigate('Payment')}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  dishContainer: {
    marginBottom: 16,
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dishDescription: {
    fontSize: 14,
    marginBottom: 8,
  },
  dishPrice: {
    fontSize: 14,
    color: 'gray',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    width: '80%',
  },
});

export default OrderConfirmationScreen;
