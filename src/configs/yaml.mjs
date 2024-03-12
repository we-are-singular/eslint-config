/**
 * @type import('eslint').Linter.Config>
 */
export default {
  overrides: [
    {
      files: ["**/*.yml", "**/*.yaml"],
      extends: ["plugin:yml/standard"],
      parser: "yaml-eslint-parser",
      // Options used with yaml-eslint-parser.
      parserOptions: {
        defaultYAMLVersion: "1.2",
      },
    },
  ],
}
