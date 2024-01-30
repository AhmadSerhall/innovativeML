// module.exports = {
//     testEnvironment: 'node',
//     testMatch: ['**/__tests__/**/*.test.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
//     testPathIgnorePatterns: ['/node_modules/'],
//   };
  
module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.mjs'],
    moduleFileExtensions: ['js', 'mjs'],
    transform: {
      '^.+\\.m?js$': 'babel-jest',
    },
    testPathIgnorePatterns: ['/node_modules/'],
  };
  
  
  
  