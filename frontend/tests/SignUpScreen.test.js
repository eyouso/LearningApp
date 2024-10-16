// tests/SignUpScreen.test.js
import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react-native";
import SignUpScreen from "../src/screens/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native"; // Mock the navigation
import { useNavigation } from "@react-navigation/native";

// Mock the navigation hook globally
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

// Mock the firebase module
jest.mock("../src/services/firebase");

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
  // Wrap the SignUpScreen in a NavigationContainer to mock navigation behavior
  const { getAllByText, getByPlaceholderText, getByText } = render(
    <NavigationContainer>
      <SignUpScreen />
    </NavigationContainer>
  );

  // Check if at least one element with the title "Sign Up" is rendered
  expect(getAllByText("Sign Up").length).toBeGreaterThan(0);

  // Check if the SignUpForm fields are present
  expect(getByPlaceholderText("Email")).toBeTruthy();
  expect(getByPlaceholderText("Password")).toBeTruthy();

  // Check if the "Already have an account? Login" button is present
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

  // Verify that navigation was called with "Login"
  expect(mockNavigate).toHaveBeenCalledWith("Login");
});

// test("signs up successfully with valid email and password", async () => {
//   const { getByPlaceholderText, getByTestId, findByText } = render(
//     <NavigationContainer>
//       <SignUpScreen />
//     </NavigationContainer>
//   );

//   // Simulate entering valid email and password
//   fireEvent.changeText(getByPlaceholderText("Email"), "validemail@example.com");
//   fireEvent.changeText(getByPlaceholderText("Password"), "validpassword123");

//   // Press the "Sign Up" button using the testID
//   fireEvent.press(getByTestId("signUpButton"));

//   // Run any pending timers
//   jest.runAllTimers();

//   // Wait for the error message to appear
//   const errorMessage = await waitFor(() =>
//     findByText("The email address is badly formatted.")
//   );
//   expect(errorMessage).toBeTruthy();

//   console.log("Test finished successfully, valid signup.");
// });
