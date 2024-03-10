/**
 * @type import('eslint').Linter.Config>
 */
export default {
  extends: ["plugin:yml/standard"],
  overrides: [
    {
      files: ["*.yaml", "*.yml"],
      parser: "yaml-eslint-parser",
      // Options used with yaml-eslint-parser.
      parserOptions: {
        defaultYAMLVersion: "1.2",
      },
    },
  ],
}
