module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'babel-plugin-transform-builtin-classes',
      {
        globals: ['Array', 'Error', 'HTMLElement'],
      },
    ],
    [
      '@babel/plugin-proposal-decorators', { legacy: true },
    ],
    [
      '@babel/plugin-proposal-class-properties',
    ],
  ],
};
