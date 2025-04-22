import storybook from 'eslint-plugin-storybook'
import * as mdx from 'eslint-plugin-mdx'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...storybook.configs['flat/recommended'],
  {
    ...mdx.flat,
    files: ['**/*.mdx'],
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
      languageMapper: {},
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    files: ['**/*.mdx'],
    rules: {
      ...mdx.flatCodeBlocks.rules,
      'no-var': 'off',
      "no-unused-vars": 'off',
      "no-undef": 'off',
      'prefer-const': 'error',
    },
  },
];
