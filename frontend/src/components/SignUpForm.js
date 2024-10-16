// src/components/SignUpForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} color="#1E90FF" testID='signUpButton'/>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '70%',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default SignUpForm;