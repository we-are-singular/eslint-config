import markdownPlugin from "eslint-plugin-markdown"

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  // @ts-ignore because the plugin is badly typed
  ...markdownPlugin.configs.recommended,
  // ignore markdown embedded scripts
  { ignores: ["**/*.md/*.ts", "**/*.md/*.js"] },
]
