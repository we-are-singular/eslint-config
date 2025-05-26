/**
 * @type import('eslint').Linter.Config>
 */
export default {
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended-legacy"],
  rules: {
    "react/jsx-key": "off",
  },
  plugins: ["react"],
  overrides: [
    {
      // just plain .ts files
      files: ["**/*.ts"],
      rules: {
        "react-hooks/rules-of-hooks": "off",
      },
    },
  ],
}
