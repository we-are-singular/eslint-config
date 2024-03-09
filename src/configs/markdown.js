
/**
 * @type import('eslint').Linter.Config>
 */
export default {
  extends: [
    "plugin:markdown/recommended",
  ],
  overrides: [
    {
      files: ["*.md"],
      processor: "markdown/markdown",
    },
  ],
}
