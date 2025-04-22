import eslintPluginYml from 'eslint-plugin-yml';

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...eslintPluginYml.configs['flat/standard'],
];