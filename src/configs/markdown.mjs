/**
 * @type import('eslint').Linter.Config>
 */
export default {
  overrides: [
    {
      extends: ["plugin:markdown/recommended-legacy"],
      files: ["*.md"],
      processor: "markdown/markdown",
      rules: {
        "no-undef": "off",
      },
    },
    {
      files: ["**/*.md/*"],
      rules: {
        "no-undef": "off",
        "no-unused-vars": "off",
      },
    },
  ],
}
