/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/tests/__mocks__/file.ts',
    '\\.(css|less)$': '<rootDir>/src/tests/__mocks__/file.js',
    'react-i18next': '<rootDir>/src/tests/__mocks__/reacti18next.ts',
    '^.+\\.error.svg$': '<rootDir>/src/tests/__mocks__/error.tsx',
    '^.+\\.svg$': '<rootDir>/src/tests/__mocks__/svg.tsx',
    '^@/(.+)$': '<rootDir>/src/$1',
  },
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: [
    '<rootDir>/tests/__mocks__/',
    '<rootDir>/dist/',
    '/node_modules/',
  ],
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  resetModules: true,
  testMatch: ['**/**/*.test.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
};
