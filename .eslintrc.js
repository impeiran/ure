module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "standard-with-typescript"
  ],
  parserOptions: {
    project: "./tsconfig.json"
  },
  plugins: ['prettier', "@typescript-eslint", "jest"],
  rules: {
    "no-prototype-builtins": 0
  }
};
