import React, { useState } from 'react';
import axios from 'axios';
import { View, TextInput, Button, Image, StyleSheet, Text } from 'react-native';
import { SERVER_BASE_URL } from './../Config/constants';

const LoginRegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleLogin = async () => {
    if (!isValidEmail) {
      return;
    }
    // Handle login logic here
    try {
      const result = await axios.post(`${SERVER_BASE_URL}api/user/login`, {
        email, password
      })
      if (result.data && result.data.acknowledged) {
        // Navigate to the appropriate screen
        navigation.navigate('Menu');
      }
      else
        alert(result.data ? result.data.message : 'Something went wrong')
    } catch (error) {
      let msg = error && error.response && error.response.data && error.response.data.msg ? error.response.data.msg : 'Something went wrong';
      alert(msg)
    }
    console.log(`Logging in with email: ${email} and password: ${password}`);
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const validateEmail = (input) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsValidEmail(emailPattern.test(input));
    setEmail(input);
  };

  const isFormValid = isValidEmail && password.length > 0;

  return (
    <View style={styles.container}>
      <Image
        source={require('../Photos/logo.jpg')} // Replace with your logo image path
        style={styles.logo}
      />
      <TextInput
        style={[styles.input, !isValidEmail && styles.invalidInput]}
        placeholder="Email"
        onChangeText={validateEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={handleLogin}
        disabled={!isFormValid} // Disable the button if the form is not valid
        color="#007AFF" // Replace with your desired color
      />
      <View style={styles.registerView}>
        <Text style={styles.text}>
          Don't have an account?
        </Text>
        <Button
          title="Register Here"
          onPress={handleRegister}
          color="#007AFF" // Replace with your desired color
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF', // Replace with your desired background color
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 16,
    borderRadius: 75, // Make the logo image round
  },
  input: {
    height: 40,
    borderRadius: 8, // Add rounded corners to the input fields
    borderColor: '#CCCCCC', // Replace with your desired border color
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  invalidInput: {
    borderColor: 'red',
  },
  registerView: {
    marginTop: 30
  },
  text: {
    alignSelf: 'center'
  }

});

export default LoginRegisterScreen;
