import astroPlugin from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import tsParser from '@typescript-eslint/parser';

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...astroPlugin.configs["flat/recommended"],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      'prettier/prettier': 'off',
      'react/no-unknown-property': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-undef': 'off',
    },
    settings: {
      linterOptions: {
        globals: {
          astroHTML: true,
        },
      }
    },
  },
]
