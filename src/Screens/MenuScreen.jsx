import React, { useState } from 'react';
import { View, Text, Button, ScrollView, Modal } from 'react-native';
import Dish from '../Components/Dish';

const MenuScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
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

  const menuData = [
    {
      id: 1,
      name: 'Garlic Parmesan Wings',
      description: 'Crispy chicken wings tossed in garlic parmesan sauce.',
      price: 9.99,
      image: require('../Photos/garlicParmesanWings.jpg'),
      category: 'Starter',
      quantity: 0, // Add quantity property
    },
    {
      id: 2,
      name: 'Caprese Skewers',
      description: 'Skewers with fresh mozzarella, cherry tomatoes, and basil drizzled with balsamic glaze.',
      price: 8.99,
      image: require('../Photos/capreseSkewers.jpg'),
      category: 'Starter',
      quantity: 0, // Add quantity property
    },
    {
      id: 3,
      name: 'Spinach Dip',
      description: 'Creamy spinach dip served with tortilla chips.',
      price: 7.99,
      image: require('../Photos/spinachDip.jpg'),
      category: 'Starter',
      quantity: 0, // Add quantity property
    },
    {
      id: 4,
      name: 'Mozzarella Sticks',
      description: 'Breaded and fried mozzarella cheese sticks served with marinara sauce.',
      price: 6.99,
      image: require('../Photos/mozzarellaSticks.jpg'),
      category: 'Starter',
      quantity: 0, // Add quantity property
    },
    {
      id: 5,
      name: 'Loaded Potato Skins',
      description: 'Crispy potato skins filled with bacon, cheese, and sour cream.',
      price: 8.99,
      image: require('../Photos/potatoSkins.jpg'),
      category: 'Starter',
      quantity: 0, // Add quantity property
    },
    {
      id: 6,
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce tossed with creamy Caesar dressing, Parmesan cheese, and croutons.',
      price: 8.99,
      image: require('../Photos/caesarSalad.jpg'),
      category: 'Starter',
      quantity: 0, // Add quantity property
    },
    {
      id: 7,
      name: 'Spaghetti Bolognese',
      description: 'Classic Italian pasta dish with a rich and savory meat sauce.',
      price: 12.99,
      image: require('../Photos/spaghettiBolognese.jpg'),
      category: 'Main Course',
      quantity: 0, // Add quantity property
    },
    {
      id: 8,
      name: 'Margherita Pizza',
      description: 'Traditional pizza topped with fresh tomatoes, mozzarella cheese, and basil.',
      price: 10.99,
      image: require('../Photos/margheritaPizza.jpg'),
      category: 'Main Course',
      quantity: 0, // Add quantity property
    },

    {
      id: 9,
      name: 'Pepperoni Pizza',
      description: 'Classic pizza topped with pepperoni slices and melted cheese.',
      price: 11.99,
      image: require('../Photos/pepperoniPizza.jpg'),
      category: 'Main Course',
      quantity: 0, // Add quantity property
    },
    {
      id: 10,
      name: 'Chicken Alfredo',
      description: 'Creamy Alfredo sauce with grilled chicken served over pasta.',
      price: 12.99,
      image: require('../Photos/chickenAlfredo.jpg'),
      category: 'Main Course',
      quantity: 0, // Add quantity property
    },
    {
      id: 11,
      name: 'Beef Burger',
      description: 'Juicy beef patty topped with cheese, lettuce, tomato, and onions.',
      price: 9.99,
      image: require('../Photos/beefBurger.jpg'),
      category: 'Main Course',
      quantity: 0, // Add quantity property
    },
    {
      id: 12,
      name: 'Chicken Parmesan',
      description: 'Breaded chicken cutlet topped with marinara sauce and melted cheese.',
      price: 13.99,
      image: require('../Photos/chickenParmesan.jpg'),
      category: 'Main Course',
      quantity: 0, // Add quantity property
    },
    {
      id: 13,
      name: 'Chocolate Cake',
      description: 'Decadent chocolate cake with a rich and creamy frosting.',
      price: 6.99,
      image: require('../Photos/chocolateCake.jpg'),
      category: 'Dessert',
      quantity: 0, // Add quantity property
    },
    {
      id: 14,
      name: 'Cheesecake',
      description: 'Creamy and smooth cheesecake with a buttery graham cracker crust.',
      price: 7.99,
      image: require('../Photos/cheesecake.jpg'),
      category: 'Dessert',
      quantity: 0, // Add quantity property
    },
    {
      id: 15,
      name: 'Tiramisu',
      description: 'Classic Italian dessert made with layers of espresso-soaked ladyfingers and mascarpone cream.',
      price: 8.99,
      image: require('../Photos/tiramisu.jpg'),
      category: 'Dessert',
      quantity: 0, // Add quantity property
    },
    {
      id: 16,
      name: 'Molten Lava Cake',
      description: 'Warm and gooey chocolate cake with a melted chocolate center.',
      price: 9.99,
      image: require('../Photos/moltenLavaCake.jpg'),
      category: 'Dessert',
      quantity: 0, // Add quantity property
    },
    {
      id: 17,
      name: 'Ice Cream Sundae',
      description: 'Classic dessert with scoops of ice cream, toppings, and a cherry on top.',
      price: 5.99,
      image: require('../Photos/iceCreamSundae.jpg'),
      category: 'Dessert',
      quantity: 0, // Add quantity property
    },
    {
      id: 18,
      name: 'Pina Colada',
      description: 'Tropical cocktail made with rum, pineapple juice, and coconut cream.',
      price: 8.99,
      image: require('../Photos/pinaColada.jpg'),
      category: 'Drink',
      quantity: 0, // Add quantity property
    },
    {
      id: 19,
      name: 'Margarita',
      description: 'Classic cocktail made with tequila, lime juice, and triple sec.',
      price: 9.99,
      image: require('../Photos/Margarita.jpg'),
      category: 'Drink',
      quantity: 0, // Add quantity property
    },
    {
      id: 20,
      name: 'Martini',
      description: 'Elegant cocktail made with gin and vermouth, garnished with an olive or lemon twist.',
      price: 10.99,
      image: require('../Photos/Martini.jpg'),
      category: 'Drink',
      quantity: 0, // Add quantity property
    },
    {
      id: 21,
      name: 'Mojito',
      description: 'Refreshing cocktail made with rum, lime juice, mint leaves, and soda water.',
      price: 7.99,
      image: require('../Photos/Mojito.jpg'),
      category: 'Drink',
      quantity: 0, // Add quantity property
    }
  ];

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



/* */