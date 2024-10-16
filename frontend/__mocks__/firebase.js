// __mocks__/firebase.js or __mocks__/firebase/auth.js depending on how you structure your mocks
export const auth = {};

export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => {
  return new Promise((resolve, reject) => {
    if (!email.includes("@")) {
      reject({
        code: "auth/invalid-email",
        message: "The email address is badly formatted."
      });
    } else {
      resolve({
        user: { email },
      });
    }
  });
});

export const getReactNativePersistence = jest.fn(() => {}); // Mock this function

// Mock initializeAuth to avoid the TypeError
export const initializeAuth = jest.fn(() => {
  return auth; // Mocking it to return the `auth` object
});
