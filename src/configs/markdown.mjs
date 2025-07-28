import markdownPlugin from "eslint-plugin-markdown"

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  // @ts-ignore because the plugin is badly typed
  ...markdownPlugin.configs.recommended,
  {
    files: ["**/*.md/*"],
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-console": "off",
      "import/no-unresolved": "off",
    },
  },
]
