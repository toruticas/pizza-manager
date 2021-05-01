module.exports = {
  plugins: ['prettier'],

  extends: ['react-app', 'react-app/jest'],

  rules: {
    'prettier/prettier': 'warn',
  },
};
