// tests/SignUpScreen.test.js
import React from "react";
import { render } from "@testing-library/react-native";
import SignUpScreen from "../src/screens/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native"; // Mock the navigation

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
