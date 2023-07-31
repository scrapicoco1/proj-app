import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { SERVER_BASE_URL } from './../Config/constants';

const RegisterScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    data: {
      email: '',
      password: '',
      confirmPassword: '',
     
      cardNumber: '',
      idCard: '',
      cardHolderName: '',
      expiryDate: '',
      cvv: ''
    }
  });

  const handleFormInput = (field, value) => {
    setForm(f => ({
      ...f, data: {
        ...f.data,
        [field]: value
      }
    }));
  }

  const handleRegister = async () => {
    if (!form.data.email || !form.data.password || !form.data.confirmPassword || !form.data.cardNumber || !form.data.idCard || !form.data.cardHolderName || !form.data.expiryDate || !form.data.cvv) {
      // If any of the required fields are empty, show an error message
      return alert('Please fill in all the required details');
    }

    // check if valid email format 
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.data.email)))
      return alert('Please enter a valid email address')

    // check if passowrd and current password matches
    if (form.data.password != form.data.confirmPassword)
      return alert('Password and Confirm Password should match')

    // Handle register logic here
    try {
      const result = await axios.post(`${SERVER_BASE_URL}api/user/register`, {
        ...form.data
      })
      if (result.data && result.data.acknowledged)
      {
        alert('Registered successfully! 🎉\nLogin now')
        // Navigate to the appropriate screen
        navigation.navigate('Login');
      }
      else
        alert(result.data ? result.data.message : 'Something went wrong')
    } catch (error) {
      alert('Something went wrong')
      console.log(error)
    }
  };

  const handleDownloadCredit = () => {
    // Handle downloading private credit logic here
    console.log('Downloading private credit...');
    // Perform necessary actions to download private credit
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Image source={require('../Photos/logo.jpg')} style={styles.logo} />
      <Text style={styles.title}>Register</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType='email-address'
          value={form.data.email}
          onChangeText={(v) => handleFormInput('email', v)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={form.data.password}
          onChangeText={(v) => handleFormInput('password', v)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={form.data.confirmPassword}
          onChangeText={(v) => handleFormInput('confirmPassword', v)}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType='number-pad'
          value={form.data.cardNumber}
          onChangeText={(v) => handleFormInput('cardNumber', v)}
        />
        <TextInput
          style={styles.input}
          placeholder="ID Card"
          value={form.data.idCard}
          onChangeText={(v) => handleFormInput('idCard', v)}
        />
        <TextInput
          style={styles.input}
          placeholder="Card Holder Name"
          value={form.data.cardHolderName}
          onChangeText={(v) => handleFormInput('cardHolderName', v)}
        />
        <TextInput
          style={styles.input}
          placeholder="Expiry Date"
          keyboardType='numbers-and-punctuation'
          value={form.data.expiryDate}
          onChangeText={(v) => handleFormInput('expiryDate', v)}
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          value={form.data.cvv}
          maxLength={4}
          secureTextEntry
          keyboardType='number-pad'
          onChangeText={(v) => handleFormInput('cvv', v)}
        />
      </View>
      <Button title="Register" onPress={handleRegister} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
});

export default RegisterScreen;
