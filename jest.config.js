module.exports = {
  'coverageDirectory': '../coverage',
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.test.json'
    }
  },
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
    'tsx'
  ],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy'
  },
  rootDir: 'src',
  testRegex: '.test.tsx?$',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  }
};