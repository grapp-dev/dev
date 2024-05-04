module.exports = {
  extends: ['./default.js'],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    React: true,
    JSX: true,
  },
  rules: {
    'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 2,
    'react/display-name': 0,
    'react/prop-types': 0,
    'react/jsx-boolean-value': [2, 'always'],
    'react/jsx-key': [2, { checkFragmentShorthand: true }],
    'react/jsx-no-useless-fragment': 2,
    'react/jsx-handler-names': [
      1,
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
  },
  settings: {
    react: {
      version: '18.2.0',
    },
  },
};
