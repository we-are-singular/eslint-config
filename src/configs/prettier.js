
/**
 * @type import('eslint').Linter.Config>
 */
export default {
  extends: [
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": "warn",
  },
  plugins: ["prettier"],
}
