/**
 * @type import('eslint').Linter.Config>
 */
export default {
  extends: ["plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        arrowParens: "always",
        useTabs: false,
        printWidth: 100,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "es5",
        semi: false,
      },
    ],
  },
  plugins: ["prettier"],
}
