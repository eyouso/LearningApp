// __mocks__/@react-navigation/native.js
const actualNav = jest.requireActual('@react-navigation/native');

module.exports = {
  ...actualNav,
  useNavigation: jest.fn(() => {
    return {
      navigate: jest.fn(),
    };
  }),
};
