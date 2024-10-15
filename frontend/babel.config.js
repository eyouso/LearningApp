module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
      "@babel/plugin-transform-optional-chaining",
      "@babel/plugin-transform-object-rest-spread",
      "@babel/plugin-transform-nullish-coalescing-operator",
      "@babel/plugin-transform-class-properties",
    ],
  };
};
