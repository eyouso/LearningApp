// src/services/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';  // For auth persistence

const firebaseConfig = {
  apiKey: "AIzaSyA221lDsRaItItCvxRXBoHVMpfF3FQBix0",
  authDomain: "learningapp-2e78b.firebaseapp.com",
  projectId: "learningapp-2e78b",
  storageBucket: "learningapp-2e78b.appspot.com",
  messagingSenderId: "986996563100",
  appId: "1:986996563100:web:9eaf7a165a3ed72542e159"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
