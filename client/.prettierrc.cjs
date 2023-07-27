module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  arrowParens: 'always',
  endOfLine: 'crlf',
  overrides: [
    {
      files: '*.{js,jsx,tsx,ts,scss,json,html}',
      options: {
        tabWidth: 4,
      },
    },
  ],
};
