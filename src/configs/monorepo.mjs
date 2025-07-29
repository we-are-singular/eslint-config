import { createRequire } from 'module';
import turboConfig from 'eslint-config-turbo/flat';

const require = createRequire(import.meta.url);
const monorepoPlugin = require('eslint-plugin-monorepo');

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  {
    plugins: {
      monorepo: monorepoPlugin,
    },
    rules: {
      'monorepo/no-internal-import': 'error',
      'monorepo/no-relative-import': 'error',
    },
  },
  ...turboConfig,
];
