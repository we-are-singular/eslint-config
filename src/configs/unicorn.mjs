// ESLint Unicorn plugin config
import eslintPluginUnicorn from "eslint-plugin-unicorn"
import { testFiles } from "../helpers.mjs"

export default [
  eslintPluginUnicorn.configs.recommended,
  // custom rules or overrides:
  {
    rules: {
      "unicorn/better-regex": "warn",
      "unicorn/no-negated-condition": "off",
      "unicorn/no-null": "off",
      "unicorn/new-for-builtins": "off",
      "unicorn/no-new-array": "off",
      "unicorn/no-new-buffer": "off",
      "unicorn/filename-case": ["warn", { case: "kebabCase" }],
      "unicorn/switch-case-braces": ["error", "avoid"],
      "unicorn/prefer-optional-catch-binding": "off",
      "unicorn/prefer-ternary": "warn",
    },
  },
  {
    files: ["**/*.tsx", "**/*.jsx", "**/*.astro"],
    rules: {
      "unicorn/prevent-abbreviations": "off",
      "unicorn/prefer-global-this": "off",
      "unicorn/prefer-module": "off",
    },
  },
  {
    files: testFiles(),
    plugins: { unicorn: "off" }, // Disable all unicorn rules for test files
  },
]
