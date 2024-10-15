// src/screens/SignUpScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SignUpForm from '../components/SignUpForm';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SignUpForm />
      <Button
        title="Already have an account? Login"
        onPress={() => navigation.navigate('Login')}
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
});

export default SignUpScreen;
