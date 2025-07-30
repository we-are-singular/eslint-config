// ESLint Unicorn plugin config
import eslintPluginUnicorn from "eslint-plugin-unicorn"

export default [
  eslintPluginUnicorn.configs.recommended,
  // Optionally, add custom rules or overrides:
  // {
  //   rules: {
  //     'unicorn/better-regex': 'warn',
  //   },
  // },
]
