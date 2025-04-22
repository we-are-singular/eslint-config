import vitestPlugin from 'eslint-plugin-vitest';
import vitestGlobalsPlugin from 'eslint-plugin-vitest-globals';
import jestDomPlugin from 'eslint-plugin-jest-dom';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import globals from 'globals';
import { findSpecFiles } from '../helpers.mjs';

/**
 * Returns the ESLint configuration for testing in libraries that use react/jest globals.
 * @param {String[]} paths - The options object.
 * @returns {Object} - The ESLint configuration object.
 */
export default function (paths) {
  return {
    files: findSpecFiles(paths),
    plugins: {
      vitest: vitestPlugin,
      'vitest-globals': vitestGlobalsPlugin,
      'jest-dom': jestDomPlugin,
      'testing-library': testingLibraryPlugin,
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
      ...vitestGlobalsPlugin.configs.recommended.rules,
      ...jestDomPlugin.configs.recommended.rules,
      ...testingLibraryPlugin.configs.react.rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
    languageOptions: {
      globals: {
        ...globals.jest,
        ...vitestGlobalsPlugin.environments.env.globals,
      },
    },
  };
}
