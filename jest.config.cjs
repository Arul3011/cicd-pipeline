// jest.config.cjs
module.exports = {
  testEnvironment: 'jest-environment-jsdom', // now available after install
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
