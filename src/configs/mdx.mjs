import * as mdx from "eslint-plugin-mdx"

/**
 * MDX ESLint configuration.
 *
 * Provides linting rules for MDX files with code block support.
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  {
    ...mdx.flat,
    files: ["**/*.mdx"],
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
      languageMapper: {},
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    files: ["**/*.mdx"],
    rules: {
      ...mdx.flatCodeBlocks.rules,
      "no-var": "off",
      "no-unused-vars": "off",
      "no-undef": "off",
      "prefer-const": "error",
    },
  },
]
