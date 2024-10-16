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
  
