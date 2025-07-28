import markdownPlugin from "eslint-plugin-markdown"

export default [
  markdownPlugin.configs.recommended,
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
