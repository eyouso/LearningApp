// src/components/SignUpForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';  // Import the function directly
import { auth } from '../services/firebase';  // Import the initialized auth instance

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)  // Use the modular method
      .then((userCredential) => {
        console.log('User created:', userCredential.user);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

export default SignUpForm;
