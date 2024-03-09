
/**
 * @type import('eslint').Linter.Config>
 */
export default {
  extends: [
    "prettier",
  ],
  rules: {
    "prettier/prettier": "warn",
  },
  plugins: ["prettier"],
}
