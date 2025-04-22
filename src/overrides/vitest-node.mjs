import vitestPlugin from 'eslint-plugin-vitest';
import vitestGlobalsPlugin from 'eslint-plugin-vitest-globals';
import { findSpecFiles } from '../helpers.mjs';

/**
 * Returns the ESLint configuration for testing in libraries that use node/browser globals.
 * @param {String[]} paths - The options object.
 * @returns {Object} - The ESLint configuration object.
 */
export default function (paths) {
  return {
    files: findSpecFiles(paths),
    plugins: {
      vitest: vitestPlugin,
      'vitest-globals': vitestGlobalsPlugin,
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
      ...vitestGlobalsPlugin.configs.recommended.rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'monorepo/no-internal-import': 'off',
    },
    languageOptions: {
      globals: vitestGlobalsPlugin.environments.env.globals,
    },
  };
}
