module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['@babel/plugin-proposal-class-properties', {loose: false}]],
  // Babel >= 7.13.0 (https://babeljs.io/docs/en/assumptions)
  assumptions: {
    setPublicClassFields: false,
  },
};
