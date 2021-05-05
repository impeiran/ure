module.exports = {
  preset: 'ts-jest',
  verbose: false,
  roots: [
    '<rootDir>/src',
  ],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  testMatch: [
    '**/__tests__/**/*.spec.ts',
    '**/__tests__/**/*.spec.js',
    '**/test/**/*.ts',
    '**/test/**/*.js',
  ],
  testURL: 'http://localhost/test?name=ure&type=util#part_one',
  testPathIgnorePatterns: ['node_modules', '.cache'],
  moduleFileExtensions: ['ts', 'js']
};