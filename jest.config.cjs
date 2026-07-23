module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|png|jpe?g|svg|ico)$': '<rootDir>/src/test/__mocks__/fileMock.cjs',
  },
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
