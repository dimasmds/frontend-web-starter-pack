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
  ],
  plugins: [
    ['babel-plugin-transform-builtin-classes', {
      globals: ['Array', 'Error', 'HTMLElement'],
    }],
  ],
};
