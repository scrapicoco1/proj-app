import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import selectedProducts from "../Data/dishes.json"

const PaymentScreen = ({ navigation, route }) => {
  // const {  paymentSummary } = route.params;

  const handleConfirmOrder = () => {
    // Perform order confirmation logic here
    console.log('Order confirmed!');
    navigation.navigate('Feedback');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Confirmation</Text>

      <Text style={styles.sectionTitle}>Selected Products:</Text>
      {selectedProducts.map((product, ind) => (
        <Text key={`prd_${ind}`} style={styles.productItem}>
          {product.name} - ${product.price.toFixed(2)}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>Payment Summary:</Text>
      {/* <Text style={styles.paymentSummary}>{paymentSummary}</Text> */}

      <Button
        title="Confirm Order"
        onPress={handleConfirmOrder}
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  productItem: {
    fontSize: 16,
    marginBottom: 4,
  },
  paymentSummary: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    width: '80%',
    borderRadius: 20,
  },
});

export default PaymentScreen;
