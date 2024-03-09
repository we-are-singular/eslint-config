/**
 * @type import('eslint').Linter.Config>
 */
export default {
  extends: ["plugin:markdown/recommended-legacy"],
  overrides: [
    {
      files: ["*.md"],
      processor: "markdown/markdown",
    },
  ],
}
