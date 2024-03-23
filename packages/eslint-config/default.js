const path = require('path');

const project = path.resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  plugins: ['functional', 'import'],
  parserOptions: {
    project,
  },
  ignorePatterns: [
    'node_modules/',
    'build/',
    '.eslintrc.js',
    '.prettierrc.js',
    'metro.config.js',
    'babel.config.js',
    'react-native.config.js',
  ],
  rules: {
    'import/no-default-export': 2,
    'no-unused-vars': 0,
    'arrow-parens': [1, 'as-needed'],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/member-delimiter-style': [0, 'none'],
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-namespace': [
      2,
      {
        allowDeclarations: true,
      },
    ],
    'functional/functional-parameters': 0,
    'functional/no-return-void': 0,
    'functional/no-conditional-statements': [0, { allowReturningBranches: true }],
    'functional/no-expression-statements': 0,
    'functional/no-mixed-type': 0,
    'functional/immutable-data': [0, { ignoreAccessorPattern: ['**.current', '**.value'] }],
    'functional/prefer-readonly-type': 2,
  },
};
