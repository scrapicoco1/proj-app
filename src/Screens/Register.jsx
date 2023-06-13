import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [visaDetails, setVisaDetails] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [idCard, setIdCard] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleRegister = () => {
    if (!email || !password || !confirmPassword || !visaDetails || !cardNumber || !idCard || !cardHolderName || !expiryDate || !cvv) {
        // If any of the required fields are empty, show an error message
        console.log('Please fill in all the required details.');
        return;
      }
    // Handle register logic here
    console.log('Registering...');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Card Number:', cardNumber);
    console.log('ID Card:', idCard);
    console.log('Card Holder Name:', cardHolderName);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);
    // Navigate to the appropriate screen
    navigation.navigate('Menu');
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
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Visa Details"
          value={visaDetails}
          onChangeText={setVisaDetails}
        />
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={setCardNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="ID Card"
          value={idCard}
          onChangeText={setIdCard}
        />
        <TextInput
          style={styles.input}
          placeholder="Card Holder Name"
          value={cardHolderName}
          onChangeText={setCardHolderName}
        />
        <TextInput
          style={styles.input}
          placeholder="Expiry Date"
          value={expiryDate}
          onChangeText={setExpiryDate}
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          value={cvv}
          onChangeText={setCvv}
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
