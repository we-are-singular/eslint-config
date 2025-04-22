import reactPlugin from 'eslint-plugin-react';

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  {
    plugins: {
      react: reactPlugin,
    },
    rules: {
      'react/jsx-key': 'off',
    },
  },
  {
    files: ['**/*.ts'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
];
