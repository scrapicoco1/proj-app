import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Dish = ({ dish, addToOrder }) => {
  return (
    <View style={styles.container}>
      <Image source={dish.image} style={styles.image} resizeMode="cover" />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description}>{dish.description}</Text>
        <Text style={styles.price}>Price: ${dish.price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: '#666',
    marginBottom: 5,
  },
  price: {
    fontWeight: 'bold',
  },
});

export default Dish;
