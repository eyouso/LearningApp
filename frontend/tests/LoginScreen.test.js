// tests/LoginScreen.test.js
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import LoginScreen from '../src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// Create a mock store for testing
const mockStore = configureStore([]);
const store = mockStore({
  auth: { isAuthenticated: false }, // Initial state for the mock store
});

test('renders LoginScreen with LoginForm and SignUp button', () => {
  // Render LoginScreen with mock store and navigation
  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    </Provider>
  );

  // Check if the "Sign Up" button is present
  expect(getByText("Don't have an account? Sign Up")).toBeTruthy();

  // Check if the LoginForm fields are present
  expect(getByPlaceholderText('Email')).toBeTruthy();
  expect(getByPlaceholderText('Password')).toBeTruthy();
});