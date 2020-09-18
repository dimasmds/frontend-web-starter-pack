module.exports = {
  preset: 'jest-puppeteer',
  globals: {
    URL: 'http://localhost:8080',
  },
  verbose: true,
  transformIgnorePatterns: [
    '/node_modules/(?!lit-element|lit-html|@open-wc)',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testMatch: [
    '**/?(*.)+(spec|test).+(ts|js)',
  ],
};
