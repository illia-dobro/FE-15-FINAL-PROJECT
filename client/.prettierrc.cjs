module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  arrowParens: 'always',
  files: {
    exclude: {
      '**/node_modules': false,
      '**/react-script': false,
    },
  },
  overrides: [
    {
      files: '*.{js,jsx,tsx,ts,scss,json,html}',
      options: {
        tabWidth: 4,
      },
    },
  ],
};
