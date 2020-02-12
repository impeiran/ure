module.exports = {
  verbose: false,
  modulePaths: ['<rootDir>/src/'],
  collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.js'],
  testMatch: ['<rootDir>/test/*.js'],
  testURL: 'http://localhost/test?name=ure&type=util#part_one',
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$'],
  moduleFileExtensions: ['js', 'json'],
  // coverageThreshold: {
  //   global: {
  //     statements: 80,
  //     branches: 80,
  //     functions: 80,
  //     lines: 80
  //   }
  // }
}