module.exports = {
  parser: 'typescript',
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  arrowParens: 'avoid',
  endOfLine: 'auto',
  importOrder: [
    '^(react|react-native|react-native-.*)$',
    '^\\@.*$',
    '^[^~.]+?$',
    '^\\~\\/.*$',
    '^[../]+[^.]+$',
    '^[./]+[^.]+$',
  ],
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ['typescript', 'jsx'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
};
