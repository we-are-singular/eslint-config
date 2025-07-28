import prettierConfig from "eslint-plugin-prettier/recommended"

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  {
    ...prettierConfig,
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": ["warn"],
    },
  },
]
