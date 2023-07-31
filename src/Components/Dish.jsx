import React, { useMemo } from 'react';
import { View, Text, Image, StyleSheet, Button, Pressable } from 'react-native';
import { SERVER_BASE_URL } from './../Config/constants';

const Dish = ({ dish, addToOrder, removeFromOrder, cartItems }) => {

  const existingItem = useMemo(() => {
    return cartItems.find((item) => item.id === dish.id);
  }, [cartItems]);

  return (
    <View style={styles.container}>
      <Image source={{uri:`${SERVER_BASE_URL}admin/${dish.image}`}} style={styles.image} resizeMode="cover" />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description}>{dish.description}</Text>
        <Text style={styles.price}>Price: ${dish.price.toFixed(2)}</Text>
        {!existingItem ? <Button title={`Add to cart`} onPress={() => addToOrder(dish)} /> : <View style={styles.quantity}>
          <Text style={styles.quantityText}>Qty:</Text>
          <View style={styles.quantityBtnPanel}>
            <Pressable style={styles.quantityBtn} onPress={() => removeFromOrder(dish.id)}>
              <Text style={styles.quantityBtntext}>{'-'}</Text>
            </Pressable>
            <Text style={styles.quantityText}>{`${existingItem.quantity}`}</Text>
            <Pressable style={styles.quantityBtn} onPress={() => addToOrder(dish)}>
              <Text style={styles.quantityBtntext}>{'+'}</Text>
            </Pressable>
          </View>
        </View>}
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
  quantity: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  quantityBtnPanel: {
    flexDirection: 'row',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf:'center'
  },
  quantityBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 80,
    elevation: 3,
    marginHorizontal: 5,
    backgroundColor: 'grey',
  },
  quantityBtntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Dish;
