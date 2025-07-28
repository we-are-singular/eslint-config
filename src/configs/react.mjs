import reactPlugin from "eslint-plugin-react"
import globals from "globals"

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  {
    files: ["**/*.{jsx,tsx}"],
    ...reactPlugin.configs.flat.recommended,
  },
  {
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    files: ["**/*.ts"],
    rules: {
      "react-hooks/rules-of-hooks": "off",
    },
  },
]
