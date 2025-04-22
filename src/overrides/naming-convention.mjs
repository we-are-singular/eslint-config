// ESLint 9+ flat config override for naming convention
import tsPlugin from '@typescript-eslint/eslint-plugin';

/**
 * Adds very strict variable naming rules.
 * @param {String[]} paths - The options object.
 * @param {String[]} names - More names to be added to the filter.
 * @returns {Object} - The ESLint configuration object.
 */
export default function (paths, names = [], overrides = {}) {
  return {
    files: paths,
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      camelcase: 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: overrides.default ?? ['camelCase'],
          filter: {
            regex: '^(Hashids)$',
            match: false,
          },
        },
        {
          selector: 'import',
          format: overrides.import ?? ['PascalCase', 'UPPER_CASE'],
        },
        {
          selector: 'variable',
          format: overrides.variable ?? ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'function',
          format: overrides.function ?? ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'parameter',
          format: overrides.parameter ?? ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'enumMember',
          format: overrides.enumMember ?? ['UPPER_CASE', 'PascalCase'],
        },
        {
          selector: 'memberLike',
          modifiers: ['private'],
          format: overrides.memberLike ?? ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'objectLiteralProperty',
          format: overrides.objectLiteralProperty ?? ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'objectLiteralMethod',
          format: overrides.objectLiteralMethod ?? ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        {
          selector: [
            'classProperty',
            'objectLiteralProperty',
            'typeProperty',
            'classMethod',
            'objectLiteralMethod',
            'typeMethod',
            'accessor',
            'enumMember',
          ],
          format: null,
          modifiers: ['requiresQuotes'],
        },
        {
          selector: 'typeLike',
          suffix: [
            'App', 'Server', 'Client', 'Controller', 'Model', 'Module', 'Service', 'Helper', 'Middleware', 'Interface', 'Abstract', 'Pipe', 'Filter', 'Guard', 'Interceptor', 'Exception', 'Context', 'Factory', 'Provider', 'Repository', 'Entity', 'Subscriber', 'Strategy', 'Mock', 'Spy', 'Decorator', 'Function', 'Class', 'Schema', 'Object', 'Array', 'Type', 'Flag', 'Props', 'Options', 'Config', 'Settings', 'Callback', 'Promise', 'Data', 'Value', 'Error', 'Map', 'Set', 'Consumer', 'Producer', 'Worker', 'Router', 'Input', 'Output', 'Mutation', 'Query', 'Subscription', 'Resolver', 'Setup', 'With', 'Where', 'DTO', 'Seed', 'Row', 'Column', 'Table', 'Item',
            ...names,
          ].filter(Boolean),
          format: overrides.typeLike ?? ['PascalCase'],
        },
        {
          selector: 'typeParameter',
          format: overrides.typeParameter ?? ['PascalCase'],
        },
      ],
    },
  };
}
