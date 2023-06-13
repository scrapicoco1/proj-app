import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';

const FeedbackScreen = () => {
  const [rating, setRating] = useState(0);
  const [suggestion, setSuggestion] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSuggestionChange = (value) => {
    setSuggestion(value);
  };

  const handleSubmitFeedback = () => {
    // Logic to handle submitting feedback
    console.log('Rating:', rating);
    console.log('Suggestion:', suggestion);
    // Additional logic for submitting feedback to the database can be implemented here
  };

  return (
    <View style={styles.container}>
      <Image source={require('../Photos/logo.jpg')} style={styles.logo} />

      <Text style={styles.title}>Thank you for choosing our application!</Text>

      <Text style={styles.subtitle}>Please rate your user experience:</Text>
      <Rating
        type="star"
        ratingCount={5}
        imageSize={30}
        startingValue={0}
        onFinishRating={handleRatingChange}
        style={styles.rating}
      />

      <Text style={styles.subtitle}>Any suggestions for improvement?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your suggestion"
        value={suggestion}
        onChangeText={handleSuggestionChange}
        multiline
      />

      <Button
        title="Submit Feedback"
        onPress={handleSubmitFeedback}
        disabled={rating === 0 || suggestion === ''}
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  rating: {
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    textAlignVertical: 'top',
    padding: 8,
    marginBottom: 16,
  },
});

export default FeedbackScreen;
