// tests/SignUpScreen.test.js
import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  cleanup,
  screen,
} from "@testing-library/react-native";
import SignUpScreen from "../src/screens/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native"; // Mock the navigation
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword, getReactNativePersistence, initializeAuth } from 'firebase/auth'; // Adjust to match your app structure

// Mock the navigation hook globally
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

// Mock the firebase auth module, as used in SignUpForm
jest.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: jest.fn(),
  getReactNativePersistence: jest.fn(),
  initializeAuth: jest.fn(() => ({
    // Return a mock auth object if needed
    currentUser: null,
  })),
}));

// Use fake timers to control the timing of async functions
beforeEach(() => {
  jest.useFakeTimers(); // Enable fake timers for controlled async behavior
});

// After each test, clear all mocks to prevent leaks
afterEach(async () => {
  cleanup();
  jest.runAllTimers();
  jest.clearAllMocks();
  jest.useRealTimers();
});

test("renders SignUpScreen with SignUpForm and Login button", () => {
  const { getAllByText, getByPlaceholderText, getByText } = render(
    <NavigationContainer>
      <SignUpScreen />
    </NavigationContainer>
  );

  expect(getAllByText("Sign Up").length).toBeGreaterThan(0);
  expect(getByPlaceholderText("Email")).toBeTruthy();
  expect(getByPlaceholderText("Password")).toBeTruthy();
  expect(getByText("Already have an account? Login")).toBeTruthy();
});

test("navigates to LoginScreen when 'Already have an account? Login' button is pressed", () => {
  const mockNavigate = jest.fn();
  useNavigation.mockReturnValue({ navigate: mockNavigate });

  const { getByText } = render(
    <NavigationContainer>
      <SignUpScreen />
    </NavigationContainer>
  );

  const loginButton = getByText("Already have an account? Login");
  fireEvent.press(loginButton);

  expect(mockNavigate).toHaveBeenCalledWith("Login");
});

test("navigates to LoginScreen after successful sign-up", async () => {
  const mockNavigate = jest.fn();
  useNavigation.mockReturnValue({ navigate: mockNavigate });

  // Mock Firebase sign-up to succeed using the createUserWithEmailAndPassword mock
  createUserWithEmailAndPassword.mockResolvedValueOnce({
    user: { uid: '123', email: 'test@example.com' },
  });

  const { getByPlaceholderText, getByText } = render(
    <NavigationContainer>
      <SignUpScreen />
    </NavigationContainer>
  );

  // Simulate entering email and password
  fireEvent.changeText(getByPlaceholderText("Email"), "test@example.com");
  fireEvent.changeText(getByPlaceholderText("Password"), "password123");

  // Press the "Sign Up" button
  fireEvent.press(screen.getByTestId("signUpButton"));

  // Wait for the Firebase function to resolve and check if navigation happens
  await waitFor(() => {
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(expect.anything(), "test@example.com", "password123");
    expect(mockNavigate).toHaveBeenCalledWith("Login");
  });
});