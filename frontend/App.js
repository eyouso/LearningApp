import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { View } from 'react-native';

export default function App() {
  return <AppNavigator />;
}

// Work on stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
