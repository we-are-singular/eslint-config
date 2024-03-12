/**
 * @type import('eslint').Linter.Config>
 */
export default {
  overrides: [
    {
      extends: ["plugin:markdown/recommended-legacy"],
      files: ["*.md"],
      processor: "markdown/markdown",
    },
  ],
}
