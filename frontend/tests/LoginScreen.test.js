// tests/LoginScreen.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import LoginScreen from '../src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native'; // Mock the navigation

test('renders LoginScreen with LoginForm and SignUp button', () => {
  // Wrap the LoginScreen in a NavigationContainer to mock navigation behavior
  const { getAllByText, getByPlaceholderText, getByText } = render(
    <NavigationContainer>
      <LoginScreen />
    </NavigationContainer>
  );

  // Check if at least one element with the title "Login" is rendered
  expect(getAllByText('Login').length).toBeGreaterThan(0);

  // Check if the LoginForm fields are present
  expect(getByPlaceholderText('Email')).toBeTruthy();
  expect(getByPlaceholderText('Password')).toBeTruthy();

  // Check if the "Don't have an account? Sign Up" button is present
  expect(getByText("Don't have an account? Sign Up")).toBeTruthy();
});
