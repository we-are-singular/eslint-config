import * as prettierPlugin from 'eslint-plugin-prettier/recommended';

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  {
    ...prettierPlugin,
    rules: {
      ...prettierPlugin.rules,
      'prettier/prettier': ['warn'],
    },
  },
];
