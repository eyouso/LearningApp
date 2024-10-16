const actualNav = jest.requireActual('@react-navigation/native');

// Mock the `useNavigation` hook globally for all tests
module.exports = {
  ...actualNav,
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
  })),
};
