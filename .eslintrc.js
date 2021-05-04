module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript'
  ],
  plugins: ['prettier', '@typescript-eslint', 'jest'],
  rules: {
    'no-prototype-builtins': 0,
    '@typescript-eslint/strict-boolean-expression': 0
  }
}
