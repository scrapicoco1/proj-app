import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Button, ScrollView, Modal } from 'react-native';
import Dish from '../Components/Dish';
import axios from 'axios';
import { SERVER_BASE_URL } from './../Config/constants';

const MenuScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const addToOrder = (dish) => {
    const existingDish = cartItems.find((item) => item.id === dish.id);
    if (existingDish) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === dish.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...dish, quantity: 1 }]);
    }
  };


  const updateQuantity = (dishId, quantity) => {
    const updatedOrder = cartItems.map((dish) => {
      if (dish.id === dishId) {
        return { ...dish, quantity };
      }
      return dish;
    });
    setCartItems(updatedOrder);
  };

  const removeFromOrder = (dishId) => {
    const existingDish = cartItems.find((item) => item.id === dishId);
    if (existingDish) {
      if (existingDish.quantity > 1) {
        const updatedCart = cartItems.map((item) => {
          if (item.id === dishId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        setCartItems(updatedCart);
      } else {
        const updatedCart = cartItems.filter((dish) => dish.id !== dishId);
        setCartItems(updatedCart);
      }
    }
  };

  useEffect(()=>{
    (async ()=>{
      const result = await axios.get(`${SERVER_BASE_URL}api/menu`);
      setMenuData(result.data);
    })()
  },[])

 

  const renderDishesByCategory = (category) => {
    const dishes = menuData.filter((dish) => dish.category === category);
    return dishes.map((dish) => (
      <Dish
        key={dish.id}
        dish={dish}
        addToOrder={addToOrder}
        updateQuantity={updateQuantity}
        removeFromOrder={removeFromOrder}
        cartItems={cartItems}
      />
    ));
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Starters</Text>
          {renderDishesByCategory('Starter')}
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Main Courses</Text>
          {renderDishesByCategory('Main Course')}
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Desserts</Text>
          {renderDishesByCategory('Dessert')}
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Drinks</Text>
          {renderDishesByCategory('Drink')}
        </View>
      </ScrollView>
      <Button
        title={`View Cart (${cartItems.length})`}
        onPress={() => navigation.navigate('Order Confirmation', { order: cartItems })}
      />
    </View>
  );
};

export default MenuScreen;



