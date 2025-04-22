import { createRequire } from 'module';
import turboConfig from 'eslint-config-turbo/flat';

const require = createRequire(import.meta.url);
const monorepoPlugin = require('eslint-plugin-monorepo');

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  monorepoPlugin.configs.recommended,
  ...turboConfig,
];
